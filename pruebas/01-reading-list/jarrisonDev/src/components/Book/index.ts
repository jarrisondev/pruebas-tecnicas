export interface BookInterface {
	title: string;
	pages: number;
	genre: string;
	cover: string;
	synopsis: string;
	year: number;
	ISBN: string;
	author: Author;
	isfavorite: boolean;
}

interface Author {
	name: string;
	otherBooks: string[];
}

export interface BookLocalStorageInterface {
	ISBN: string;
}
