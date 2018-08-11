import Core from "core";


new Core({
  API: {
    server: 'localStorage',

    books: 'book/',
    authors: 'author/',
    images: 'image/'
  },

  routes: {
    books: 'plugins/books/',
    authors: 'plugins/authors/',
    images: 'plugins/images/'
  }
});
