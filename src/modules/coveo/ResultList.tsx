/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, useContext, useEffect, useMemo, useState } from "react";
import { ComponentInstance, RootComponentInstance } from "@uniformdev/canvas";
import { ComponentProps, registerUniformComponent } from "@uniformdev/canvas-react";
// @ts-ignore: Expected error if the module is not yet installed
import { buildResultList, Result } from "@coveo/headless";
import { HeadlessEngineContext } from "./Engine";
import ResultItem from "./ResultItem";
import InformationContent from "../../components/InformationContent";

enum ItemTypes {
  Item = "coveo-resultListItem",
}

const COVEO_FIELDS_TO_INCLUDE = [
  "slug",
  "description",
  "ec_description",
  "ec_category",
  "name",
  "ec_thumbnails",
  "sub_category",
];

// Coveo Result List docs https://docs.coveo.com/en/headless/latest/reference/search/controllers/result-list/
const ResultList: FC<ComponentProps> = ({ component }) => {
  const headlessEngine = useContext(HeadlessEngineContext);
  const headlessResultList = useMemo(
    () =>
      buildResultList(headlessEngine, {
        options: {
          fieldsToInclude: COVEO_FIELDS_TO_INCLUDE,
        },
      }),
    [headlessEngine]
  );

  const [resultState, setResultState] = useState(headlessResultList.state);

  useEffect(() => headlessResultList.subscribe(() => setResultState(headlessResultList.state)), [headlessResultList]);

  const renderResultItem = (component: ComponentInstance, item: Result) => {
    const currentComponent = (component?.slots?.resultItemComponent?.[0] as RootComponentInstance) || {};

    switch (currentComponent?.type) {
      case ItemTypes.Item:
        return <ResultItem item={item} key={item.uniqueId} component={currentComponent} />;
      default:
        return (
          <div
            className="mb-4 flex items-center justify-center rounded-md border border-gray-300 p-4"
            key={item.uniqueId}
          >
            <span>Add your custom Result Item</span>
          </div>
        );
    }
  };

  if (!resultState.results?.length) return <InformationContent title="Sorry there are no products for this filter" />;

  return (
    <div className="mb-8 grid gap-y-3 sm:mb-0 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-5">
      {
        // @ts-ignore: Expected error if the module is not yet installed
        resultState.results.map(result => renderResultItem(component, result))
      }
    </div>
  );
};

registerUniformComponent({
  type: "coveo-resultList",
  component: ResultList,
});

export default ResultList;
