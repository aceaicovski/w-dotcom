/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, useContext, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { ComponentProps, UniformText, registerUniformComponent } from '@uniformdev/canvas-react';
// @ts-ignore: Expected error if the module is not yet installed
import { FacetState, buildFacet, FacetValue, buildSearchBox } from '@coveo/headless';
import { HeadlessEngineContext } from './Engine';

type FacetProps = {
  field: string;
};

// Coveo Facet docs https://docs.coveo.com/en/headless/latest/reference/search/controllers/facet/
const Facet: FC<FacetProps> = ({ field }) => {
  const headlessEngine = useContext(HeadlessEngineContext);
  const headlessFacets = useMemo(
    () =>
      buildFacet(headlessEngine, {
        options: {
          field,
        },
      }),
    [field, headlessEngine]
  );

  const [facetState, setFacetState] = useState<FacetState>(headlessFacets.state);

  useEffect(() => headlessFacets.subscribe(() => setFacetState(headlessFacets.state)), [headlessFacets]);

  const headlessSearchBox = useMemo(() => buildSearchBox(headlessEngine), [headlessEngine]);

  const currentSubCategory = useMemo(
    // @ts-ignore: Expected error if the module is not yet installed
    () => facetState?.values.find(v => v.value === field),
    [facetState?.values, field]
  );

  useEffect(() => {
    if (!headlessSearchBox.state.isLoading) {
      if (currentSubCategory && currentSubCategory.state === 'idle') {
        headlessFacets?.toggleSingleSelect(currentSubCategory);
      } else if (!currentSubCategory) {
        headlessSearchBox.submit();
      }
    }
  }, [currentSubCategory, headlessEngine, headlessFacets, headlessSearchBox]);

  const toggleSelect = (value: FacetValue) => headlessFacets.toggleSelect(value);

  const getFacetValues = () => {
    return facetState.values.map((value: FacetValue) => (
      <div
        className={classNames('mt-4 px-2 text-secondary-content hover:opacity-30', {
          'my-1 whitespace-nowrap rounded bg-primary px-2 py-1.5 text-primary-content hover:opacity-30':
            headlessFacets.isValueSelected(value),
        })}
        key={value.value}
        onClick={() => {
          toggleSelect(value);
        }}
      >
        <label className="flex cursor-pointer items-center justify-between pr-3">
          <span
            className={classNames('flex-1 pr-4 capitalize', {
              'text-primary-content': headlessFacets.isValueSelected(value),
            })}
          >
            {value.value}
          </span>
          <span className="rounded-full bg-gray-50 px-2 text-secondary-content">{value.numberOfResults}</span>
        </label>
      </div>
    ));
  };

  return (
    <div className="flex flex-col gap-2">
      <div>{getFacetValues()}</div>
    </div>
  );
};

type FacetConfigurationProps = ComponentProps<{
  facet?: {
    facetConfiguration?: {
      field?: string;
    };
  };
  title?: string;
}>;

const FacetConfiguration: FC<FacetConfigurationProps> = ({ facet }) => {
  const { field = '' } = facet?.facetConfiguration || {};

  if (!field) {
    return <p className="text-black">Facet field must be provided</p>;
  }

  return (
    <div className="flex w-full justify-center">
      <div className="inline-flex min-h-[250px] flex-col pr-10 pt-12 first:pt-2 lg:w-full">
        <UniformText parameterId="title" className="text-lg font-extrabold capitalize text-black" />
        <Facet key={field} field={field} />
      </div>
    </div>
  );
};

registerUniformComponent({
  type: 'coveo-facet',
  component: FacetConfiguration,
});

export default FacetConfiguration;
