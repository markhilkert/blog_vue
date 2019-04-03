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
                            <article class="post">

                                <div class="post-header">
                                    <h2 class="post-title"><router-link to="/posts/1">Sleep&#8212It's frustratingly Important. </router-link></h2>
                                    <ul class="post-meta">
                                        <li><i class="mdi mdi-calendar"></i> April 02, 2019</li>
                                        <li><i class="mdi mdi-tag-text-outline"></i> <a href="#">Productivity</a>, <a href="#">Sleep</a></li>
                                        <!-- # of comments goes here -->
                                    </ul>
                                </div>

                                <div class="post-preview">
                                    <router-link to="/posts/1"><img src="images/blog/blog-1.jpg" alt="a cup of coffee and a book rest on a bed in the sunlight" class="img-fluid rounded"></router-link>
                                </div>

                                <div class="post-content">
                                    <p>When I was an undergraduate engineering student, there was something that I never understood. I frequently found myself putting in late hours, in the computer labs until 2 or 3am finishing long assignments. Why weren’t any of the best students there pulling late nights with me? To understand why...</p>                                         
                                </div>

                                <div><a href="#" class="btn btn-outline-custom">Read More <i class="mdi mdi-arrow-right"></i></a></div>

                            </article>
                            <!-- Post end-->

                            <!-- Pagination-->
                            <div class="row">
                                <div class="col-lg-12">
                                    <ul class="pagination">
                                        <li class="next"><a href="#"><i class="mdi mdi-chevron-left"></i></a></li>
                                        <li class="active"><a href="#">1</a></li>
                                        <li class="prev"><a href="#"><i class="mdi mdi-chevron-right"></i></a></li>
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
                                        <img src="images/photo.jpg" alt="About Me" class="rounded-circle">

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
                                        <li><a href="#">Journey</a> (40)</li>
                                        <li><a href="#">Photography</a> (08)</li>
                                        <li><a href="#">Lifestyle</a> (11)</li>
                                        <li><a href="#">Food & Drinks</a> (21)</li>
                                    </ul>
                                </aside>

                                <!-- Recent entries widget-->
                                <aside class="widget widget_recent_entries_custom">
                                    <div class="widget-title">Popular Posts</div>
                                    <ul>
                                        <li class="clearfix">
                                            <div class="wi">
                                                <a href="#"><img src="images/works/img1.jpg" alt="" class="img-fluid"></a>
                                            </div>
                                            <div class="wb"><a href="#">Beautiful Day With Friends..</a> <span class="post-date">Jun 15, 2017</span></div>
                                        </li>
                                        <li class="clearfix">
                                            <div class="wi">
                                                <a href="#"><img src="images/works/img2.jpg" alt="" class="img-fluid"></a>
                                            </div>
                                            <div class="wb"><a href="#">Nature valley with cooling..</a> <span class="post-date">Jun 10, 2017</span></div>
                                        </li>
                                        <li class="clearfix">
                                            <div class="wi">
                                                <a href="#"><img src="images/works/img3.jpg" alt="" class="img-fluid"></a>
                                            </div>
                                            <div class="wb"><a href="#">15 Best Healthy and Easy Salad..</a> <span class="post-date">Jun 8, 2017</span></div>
                                        </li>
                                    </ul>
                                </aside>

                                <!-- Text widget-->
                                <aside class="widget">
                                    <div class="widget-title">Text Widget</div>

                                    <p class="text-muted text-widget-des">Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. </p>

                                </aside>

                                <!-- Archives widget-->
                                <aside class="widget">
                                    <div class="widget-title">Archives</div>

                                    <ul>
                                        <li><a href="#">March 2017</a> (40)</li>
                                        <li><a href="#">April 2017</a> (08)</li>
                                        <li><a href="#">May 2017</a> (11)</li>
                                        <li><a href="#">Jun 2017</a> (21)</li>
                                    </ul>

                                </aside>

                                <!-- Tags widget-->
                                <aside class="widget widget_tag_cloud">
                                    <div class="widget-title">Tags</div>
                                    <div class="tagcloud">
                                        <a href="#">logo</a>
                                        <a href="#">business</a>
                                        <a href="#">corporate</a>
                                        <a href="#">e-commerce</a>
                                        <a href="#">agency</a>
                                        <a href="#">responsive</a>
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

</script>
