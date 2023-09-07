import type { BookInterface, BookLocalStorageInterface } from '../components/Book';

interface BooksFromEndpoint {
	book: {
		title: string;
		pages: number;
		genre: string;
		cover: string;
		synopsis: string;
		year: number;
		ISBN: string;
		author: {
			name: string;
			otherBooks: string[];
		};
	};
}

export const booksAdapter = (
	library: BooksFromEndpoint[],
	favorites: BookLocalStorageInterface[]
): BookInterface[] => {
	return library.map(
		({ book }): BookInterface => ({
			title: book.title,
			pages: book.pages,
			genre: book.genre,
			cover: book.cover,
			synopsis: book.synopsis,
			year: book.year,
			ISBN: book.ISBN,
			author: book.author,
			isfavorite: !!favorites.find((b) => b.ISBN === book.ISBN)
		})
	);
};
