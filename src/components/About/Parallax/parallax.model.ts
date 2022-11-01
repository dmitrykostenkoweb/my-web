export type RandomPosition = {
  positionTop: string;
  positionLeft: string;
  positionRight: string;
  positionBottom: string;
};

export interface ParallaxData extends RandomPosition {
  src: string;
  width: string;
  strength: number;
}
