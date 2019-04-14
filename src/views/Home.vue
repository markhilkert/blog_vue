<template>
  <div class="home">
    <!-- Begin page -->
    <div id="wrapper">
        <div class="page-wrapper">
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="page-title">
                                <div class="row">
                                    <div class="col-md-9 col-xs-12">
                                        <h2><span>What's on my mind.</span></h2>

                                        <p class="subtitle text-muted">As you'll see, my interests are a little all over the place. But here's what's come up for me most recently.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mt-5 pb-5">
                <div class="container">

                    <div class="row">
                        <!-- Content-->
                        <div class="col-xl-8">

                            <!-- Post-->
                            <article v-for="post in posts" class="post">

                                <div class="post-header">
                                    <h2 class="post-title"><router-link to="/posts/1"> {{ post.title }} </router-link></h2>
                                    <ul class="post-meta">
                                        <li><i class="mdi mdi-calendar"></i> {{ post.date }} </li>
                                        <li><i class="mdi mdi-tag-text-outline"></i> <router-link v-for="tag in post.formatted.tags" to="#"> {{ tag }} </router-link></li>
                                        <!-- # of comments goes here -->
                                    </ul>
                                </div>

                                <div class="post-preview">
                                    <router-link to="/posts/1"><img src="/images/blog/blog-1.jpg" alt="a cup of coffee and a book rest on a bed in the sunlight" class="img-fluid rounded"></router-link>
                                </div>

                                <div class="post-content">
                                    <p>When I was an undergraduate engineering student, there was something that I never understood. I frequently found myself putting in late hours, in the computer labs until 2 or 3am finishing long assignments. Why weren’t any of the best students there pulling late nights with me? To understand why...</p>                                         
                                </div>

                                <div><router-link to="#" class="btn btn-outline-custom">Read More <i class="mdi mdi-arrow-right"></i></router-link></div>

                            </article>
                            <!-- Post end-->

                            <!-- Pagination-->
                            <div class="row">
                                <div class="col-lg-12">
                                    <ul class="pagination">
                                        <li class="next"><router-link to="#"><i class="mdi mdi-chevron-left"></i></router-link></li>
                                        <li class="active"><router-link to="#">1</router-link></li>
                                        <li class="prev"><router-link to="#"><i class="mdi mdi-chevron-right"></i></router-link></li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Pagination end-->
                        </div>
                        <!-- Content end-->

                        <!-- Sidebar-->
                        <div class="col-xl-4">
                            <div class="sidebar">

                                <!-- Search widget-->
                                <!-- When implemented -->

                                <aside class="widget about-widget">
                                    <div class="widget-title">About Me</div>

                                    <div class="text-center">
                                        <img src="/images/photo.jpg" alt="About Me" class="rounded-circle">

                                        <p>Quis vero phasellus hac nullam, in quam vitae duis adipiscing mauris leo, laoreet eget at quis, ante vestibulum vivamus vel. Sapien lobortis, eget orci purus amet pede, consectetur neque risus.</p>
                                    </div>

                                </aside>

                                <aside class="widget about-widget">
                                    <div class="widget-title">Where (Else) You Can Find Me </div>

                                    <ul class="socials">
                                        <li><a href="http://github.com/markhilkert"><i class="mdi mdi-github-circle"></i></a></li>
                                        <li><a href="mailto: mark.hilkert@gmail.com"><i class="mdi mdi-gmail"></i></a></li>
                                    </ul>

                                </aside>

                                <!-- Categories widget-->
                                <aside class="widget widget_categories">
                                    <div class="widget-title">Categories</div>
                                    <ul>
                                        <li><router-link to="#">Sleep</router-link> (1)</li>
                                        <li><router-link to="#">Productivity</router-link> (1)</li>
                                        <li><router-link to="#">Lifestyle</router-link> (1)</li>
                                    </ul>
                                </aside>

                                <!-- Recent entries widget-->
                                <aside class="widget widget_recent_entries_custom">
                                    <div class="widget-title">Popular Posts</div>
                                    <ul>
                                        <li class="clearfix">
                                            <div class="wi">
                                                <router-link to="/posts/1"><img src="/images/works/img1.jpg" alt="a cup of coffee and a book rest on a bed in the sunlight" class="img-fluid"></router-link>
                                            </div>
                                            <div class="wb"><router-link to="/posts/1">Sleep&#8212It's frustratingly Important.</router-link> <span class="post-date">April 2, 2019</span></div>
                                        </li>
                                    </ul>
                                </aside>

                                <!-- Text widget-->

                                <!-- Archives widget-->

                                <!-- Tags widget-->
                                <aside class="widget widget_tag_cloud">
                                    <div class="widget-title">Tags</div>
                                    <div class="tagcloud">
                                        <router-link to="/">Sleep</router-link>
                                        <router-link to="/">Productivity</router-link>
                                        <router-link to="/">Lifestyle</router-link>
                                    </div>
                                </aside>
                            </div>
                        </div>
                        <!-- Sidebar end-->

                    </div>

                </div>
                <!-- end container -->
            </section>
        </div>
    </div>
    <!-- End page -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      errors: [],
      posts: []
    };
  },
  created: function() {
    axios.get("/api/posts/")
      .then(response => {
        this.posts = response.data;
        console.log(this.posts)
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
