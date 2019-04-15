<template>
  <div class="post">
    <!-- Begin page -->
    <div id="wrapper">
      <div class="page-wrapper">
        <section class="pb-5">
          <div class="container">
            <div class="row pt-5">

              <!-- Content-->
              <div class="col-xl-8">

                <!-- Post-->
                <article class="post">
                  <div class="post-header">
                    <h2 class="post-title"> {{ post.title }} </h2>
                    <ul class="post-meta">
                        <li><i class="mdi mdi-calendar"></i> {{ post.date }} </li>
                        <li><i class="mdi mdi-tag-text-outline"></i> <router-link v-for="tag in post.formatted.tags" to="#"> {{ tag }} </router-link></li>
                        <li v-if="post.comments.length === 1"><i class="mdi mdi-comment-multiple-outline"></i> <router-link v-bind:to="'/posts/' + post.id"> 1 Comment</router-link></li>
                        <li v-if="post.comments.length !== 1"><i class="mdi mdi-comment-multiple-outline"></i> <router-link v-bind:to="'/posts/' + post.id"> {{ post.comments.length }} Comments</router-link></li>
                    </ul>
                  </div>

                  <div class="post-preview">
                      <img v-bind:src="'/images/blog/blog-' + post.id + '.jpg'" alt="a cup of coffee and a book rest on a bed in the sunlight" class="img-fluid rounded">
                  </div>

                  <div class="blog-detail-description">
                      
                    <p v-html="post.body"></p>

                      <div class="mt-5">
                          <h6>Tags:</h6>
                          <div class="tagcloud">
                              <router-link to="/posts/1">Sleep</router-link>
                              <router-link to="/posts/1">Productivity</router-link>
                              <router-link to="/posts/1">Lifestyle</router-link>
                          </div>
                      </div>

                      <div class="media post-author-box">
                          <img class="d-flex mr-3 rounded-circle" src="images/user/user-5.png" alt="Generic placeholder image">
                          <div class="media-body">
                              <h4 class="media-heading"><router-link to="">Michelle Durant</router-link></h4>
                              <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>

                              <ul class="socials list-unstyled mb-0 mt-3">
                                  <li><a href="http://facebook.com"><i class="mdi mdi-facebook"></i></a></li>
                                  <li><a href="http://twitter.com"><i class="mdi mdi-twitter"></i></a></li>
                                  <li><a href="http://instagram.com"><i class="mdi mdi-instagram"></i></a></li>
                                  <li><a href="http://pinterest.com"><i class="mdi mdi-pinterest"></i></a></li>
                              </ul>
                          </div>
                      </div>

                      <div class="mt-5 text-center">
                          <h5 class="page-title-alt"><span>You Might Also Like</span></h5>
                      </div>

                      <div class="row">
                          <div class="col-sm-4">
                              <article class="related-post">
                                  <div class="post-preview">
                                      <router-link to="blog-single.html"><img src="/images/blog/blog-2.jpg" alt="" class="img-fluid rounded"></router-link>
                                  </div>

                                  <div class="post-header">
                                      <h6><router-link to="single-post2.html" title="">15 Best Healthy and Easy Salad Recipes</router-link></h6>
                                      <p class="post-date">August 12, 2017</p>
                                  </div>
                              </article>
                          </div>
                          <div class="col-sm-4">
                              <article class="related-post">
                                  <div class="post-preview">
                                      <router-link to="blog-single.html"><img src="/images/blog/blog-3.jpg" alt="" class="img-fluid rounded"></router-link>
                                  </div>

                                  <div class="post-header">
                                      <h6><router-link to="single-post2.html" title="">The planet doesn’t need saving. We do.</router-link></h6>
                                      <p class="post-date">August 17, 2017</p>
                                  </div>
                              </article>
                          </div>
                          <div class="col-sm-4">
                              <article class="related-post">
                                  <div class="post-preview">
                                      <router-link to="blog-single.html"><img src="/images/blog/blog-4.jpg" alt="" class="img-fluid rounded"></router-link>
                                  </div>

                                  <div class="post-header">
                                      <h6><router-link to="single-post2.html" title="">Modern City With Amazing Dark Blue Sea</router-link></h6>
                                      <p class="post-date">August 20, 2017</p>
                                  </div>
                              </article>
                          </div>
                      </div>

                      <!-- Comments (once implemented) -->

                      <!-- Leave a reply (once implemented) -->
                  </div>

                </article>
                <!-- Post end-->

              </div>
              <!-- Content end-->

                <!-- Right Sidebar -->
                <div class="col-xl-4">
                    <div class="sidebar">

                        <!-- Search widget-->
                        <aside class="widget widget_search">
                            <form>
                                <input class="form-control pr-5" type="search" placeholder="Search...">
                                <button class="search-button" type="submit"><span class="mdi mdi-magnify"></span></button>
                            </form>
                        </aside>

                        <aside class="widget about-widget">
                            <div class="widget-title">About Me</div>

                            <div class="text-center">
                                <img src="/images/photo.jpg" alt="About Me" class="rounded-circle">

                                <p>Quis vero phasellus hac nullam, in quam vitae duis adipiscing mauris leo, laoreet eget at quis, ante vestibulum vivamus vel. Sapien lobortis, eget orci purus amet pede, consectetur neque risus.</p>
                            </div>

                        </aside>

                        <aside class="widget about-widget">
                            <div class="widget-title">Subscribe & Follow</div>

                            <ul class="socials">
                                <li><a href="http://facebook.com"><i class="mdi mdi-facebook"></i></a></li>
                                <li><a href="http://twitter.com"><i class="mdi mdi-twitter"></i></a></li>
                                <li><a href="http://instagram.com"><i class="mdi mdi-instagram"></i></a></li>
                                <li><a href="http://pinterest.com"><i class="mdi mdi-pinterest"></i></a></li>
                            </ul>

                        </aside>

                        <!-- Categories widget-->
                        <!-- (once implemented) -->

                        <!-- Recent entries widget-->
                        <!-- Popular Posts, once implemented -->

                        <!-- Text widget-->
                        <aside class="widget">
                            <div class="widget-title">Text Widget</div>

                            <p class="text-muted text-widget-des">Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. </p>

                        </aside>

                        <!-- Archives widget-->
                        <aside class="widget">
                            <div class="widget-title">Archives</div>

                            <ul>
                                <li><router-link to="#">March 2017</router-link> (40)</li>
                                <li><router-link to="#">April 2017</router-link> (08)</li>
                                <li><router-link to="#">May 2017</router-link> (11)</li>
                                <li><router-link to="#">Jun 2017</router-link> (21)</li>
                            </ul>

                        </aside>

                        <!-- Tags widget-->
                        <aside class="widget widget_tag_cloud">
                            <div class="widget-title">Tags</div>
                            <div class="tagcloud">
                                <router-link to="#">logo</router-link>
                                <router-link to="#">business</router-link>
                                <router-link to="#">corporate</router-link>
                                <router-link to="#">e-commerce</router-link>
                                <router-link to="#">agency</router-link>
                                <router-link to="#">responsive</router-link>
                            </div>
                        </aside>
                    </div>
                </div>
                <!-- End Right Sidebar -->
            </div>
          </div>
        </section>
      </div>
    </div>
    <!-- End page -->
  </div>
</template>

<script>
  import axios from "axios";
  import DOMPurify from "dompurify";

  export default {
    data: function() {
      return {
        errors: [],
        post: {
                id: "",
                date: "",
                preview_image: "",
                title: "",
                body: "",
                preview_text: "",
                formatted: [],
                tags: [],
                comments: []
        }
      };
    },
    created: function() {
      axios.get("/api/posts/" + this.$route.params.id)
        .then(response => {
          this.post = response.data;
          this.post.body = DOMPurify.sanitize(this.post.body);
          console.log(this.post);
        });
    },
    methods: {
      functionName: function() {
        // axios.requestType("url")      
        // .then(response => {
          // what to do next
        // }).catch(error => {
        //   this.errors = error.response.data.errors;
        // });
      }
    }
  };
</script>
