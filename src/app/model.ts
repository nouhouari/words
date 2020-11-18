export class Word {
    id: string;
    text: string;
    type: WordType;
    comment?: string;
}

export enum WordType{
    Verset,
    Hadith,
    Citation,
    Tafsir,
    Invocation,
    Exhortation
}