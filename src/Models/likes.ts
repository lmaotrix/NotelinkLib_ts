export type LikeNote = {
  noteId: number;
  userId: number;
  vote: LikeType;
};

export enum LikeType {
  Dislike,
  Like,
 
}
