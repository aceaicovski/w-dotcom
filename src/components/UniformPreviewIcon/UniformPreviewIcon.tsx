import { FC } from 'react';
import { useUniformCurrentComposition } from '@uniformdev/canvas-react';

const UniformPreviewIcon: FC = () => {
  const { isContextualEditing } = useUniformCurrentComposition();

  if (isContextualEditing) return null;

  return (
    <div className="fixed bottom-6 left-6 cursor-default text-5xl">
      <div className="tooltip tooltip-right tooltip-primary" data-tip="Preview mode is enabled">
        💎
      </div>
    </div>
  );
};

export default UniformPreviewIcon;
