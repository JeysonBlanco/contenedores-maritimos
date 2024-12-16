export interface ContainerDimensions {
  external: {
    length: number;
    width: number;
    height: number;
  };
  internal: {
    length: number;
    width: number;
    height: number;
  };
  maxWeight: number;
  capacity: number;
}

export interface ContainerType {
  id: string;
  name: string;
  dimensions: ContainerDimensions;
  color: string;
  isOpenTop?: boolean;
  isFlatRack?: boolean;
  isReefer?: boolean;
}

export interface HotspotInfo {
  id: string;
  position: [number, number, number];
  title: string;
  content: string;
}