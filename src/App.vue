<template>
  <div id="app">
    <router-view/>

    <!-- Top Bar Start -->
    <div class="topbar-mobile">
        <div class="logo">
            <router-link to="/"><img src="/images/logo.png" alt="Mark. Est. 1985" class="" style="height: 44px;"></router-link>
            <button class="button-menu-mobile">
                <i class="mdi mdi-menu"></i>
            </button>
        </div>
    </div>
    <!-- Top Bar End -->

    <!-- ========== Left Sidebar Start ========== -->
    <div class="left side-menu">

        <div class="slimscroll-menu" id="remove-scroll">

            <div class="logo">
                <router-link to="/"><img src="/images/logo.png" alt="Mark. Est. 1985" class="" style="height: 180px;"></router-link>
                <p class="text-muted">Software. Productivity. Sleep. And whatever else sticks. </p>
            </div>

            <!--- Sidemenu -->
            <div id="sidebar-menu">
                <!-- Left Menu Start -->
                <ul class="metismenu" id="side-menu">
                    
                    <li>
                        <router-link to="/"><span> Home</span></router-link>
                    </li>

                    <li>
                        <router-link to="/about">About</router-link>
                    </li>

                    <li>
                        <router-link to="/contact">Contact</router-link>
                    </li>

                </ul>

                <div class="copyright-box">
                    <p>2019 © Mark Hilkert. </p>
                </div>

            </div>
            <!-- Sidebar -->
            <div class="clearfix"></div>

        </div>
        <!-- Sidebar -left -->

    </div>
    <!-- Left Sidebar End -->

  </div>
</template>

<style>

</style>
