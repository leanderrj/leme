# leme.nl - Jekyll + Tailwind Starter Theme

The codebase for leme.nl a minimal showcase made with Jekyll. It is a neat Jekyll + Tailwind boilerplate to start from.

## Theme features

- Uses PostCSS with autoprefixer, nested css, cssnano (minify css)
- Works with native Jekyll commands `jekyll serve` and `jekyll build`
- Correctly uses Tailwind to purge CSS in production
- Full blog functionality
- Neat designed responsive blog and post layouts
- Blog categories
- Blog pagination
- Responsive design
- Responsive menu
- 100/100 Google Lighthouse speed score ⚡
- 100/100 Google Lighthouse seo score 🏆
- 94/100 Google Lighthouse accessibility score (but this is just because of the green text color contrast)
- Page size is 10KB without images, can you believe it?? 🔥
- Robust example content included
- Royalty free illustrations included
- Netlify & Github Pages ready

## Installation

### Installing Ruby & Jekyll

If this is your first time using Jekyll, please follow the [Jekyll docs](https://jekyllrb.com/docs/installation/) and make sure your local environment (including Ruby) is setup correctly.

### Installing Theme

Download or clone the theme.

To run the theme locally, navigate to the theme directory and run:

To use Tailwind and PostCSS:

```
npm install
```

```
bundle install
```

To start the Jekyll local development server.

```
bundle exec jekyll serve
```

To build the theme.

```
bundle exec jekyll build
```

## Deployment
### Github Pages
This theme has been tested to work with Github Pages (and Github Project Pages). When using Github Pages you will need to update the `baseurl` in the `_config.yml` otherwise all the css, images and paths will be broken.

For example the site https://zerostaticthemes.github.io/jekyll-atlantic-theme would have `baseurl: "/jekyll-atlantic-theme/"`

