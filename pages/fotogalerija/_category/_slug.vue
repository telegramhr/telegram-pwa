<template>
  <div class="main-container flex single-article gallery">
    <client-only>
      <theader></theader>
    </client-only>
    <div class="full gallery-body">
      <div class="container flex relative mobile-side-pad">
        <div class="full flex article-head">
          <div class="full flex">
            <h3 class="overtitle">{{ post.category }}</h3>
          </div>
          <h1 class="full">{{ post.title }}</h1>
          <h2 class="full">{{ post.subtitle }}</h2>
        </div>
        <div class="full flex gallery-content relative">
          <div class="gallery-header full flex">
            <div class="third animate">
              <i class="far fa-angle-left"></i> Prethodna
            </div>
            <div class="gallery-count third animate">Slika 1/1</div>
            <div class="third animate">
              Sljedeća <i class="far fa-angle-right"></i>
            </div>
          </div>
          <figure class="full relative">
            <div class="gallery-left center gallery-arrow desktop-only animate">
              <i class="far fa-angle-left animate"></i>
            </div>
            <div
              class="gallery-right center gallery-arrow desktop-only animate"
            >
              <i class="far fa-angle-right animate"></i>
            </div>
            <img
              src="https://www.telegram.hr/wp-content/uploads/2020/09/zagreb-pride-08.jpg"
              alt="Pride"
            />
            <figcaption class="wp-caption-text img-portrait">
              Lorem ipsum dolor sit amet
              <span class="photographer">Vjekoslav Skledar</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'Slug',
  data() {
    return {
      post: {
        type: '',
        image: {
          url: '',
          alt: '',
          author: '',
        },
        authors: [
          {
            url: '',
            name: '',
            image: '',
          },
        ],
        overtitle: '',
        title: '',
        subtitle: '',
        content: '',
        recommendations: 0,
        comments: 0,
        time: 0,
        tags: [],
        social: {
          title: '',
          description: '',
          image: '',
        },
      },
    }
  },
}
</script>
