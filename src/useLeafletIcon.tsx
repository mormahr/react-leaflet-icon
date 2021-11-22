import { DivIcon, PointExpression } from 'leaflet';
import { FC, useMemo, useState } from 'react';

import { createPortal } from 'react-dom';

export interface IconOptions {
  bgPos?: PointExpression | undefined;
  iconSize?: PointExpression | undefined;
  iconAnchor?: PointExpression | undefined;
  popupAnchor?: PointExpression | undefined;
  tooltipAnchor?: PointExpression | undefined;
  className?: string | undefined;
}

export function useLeafletIcon(options: IconOptions = {}): [DivIcon, FC] {
  const {
    bgPos,
    iconSize,
    iconAnchor,
    popupAnchor,
    tooltipAnchor,
    className,
  } = options;
  const [div] = useState(() => document.createElement('div') as HTMLDivElement);
  const icon = useMemo(
    () =>
      new DivIcon({
        bgPos,
        iconSize,
        iconAnchor,
        popupAnchor,
        tooltipAnchor,
        className,
        html: div,
      }),
    [div, bgPos, iconSize, iconAnchor, popupAnchor, tooltipAnchor, className]
  );
  const Portal: FC = useMemo(
    () => ({ children }) => createPortal(children, div),
    [div]
  );

  return [icon, Portal];
}
