import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      // optional configuration for GitHub Pages
      fallback: '200.html'
    }),
    paths: {
      base: '/Masodik'
    }
  }
};
