export interface Choice {
  type: "choice";
  content: string;
}

export interface FillInBlank {
  type: "fillInBlank";
  content: string;
}

export type Item = Choice | FillInBlank;
