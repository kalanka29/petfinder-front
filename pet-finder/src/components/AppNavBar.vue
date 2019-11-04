<!--@author Kalanka Siyambalapitiya-->
<template>
  <nav>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <router-link to="/">
            <img src="../assets/images/pet-finder-logo.png" />
          </router-link>
        </div>
        <div class="col-md-3">
          <div class="row">
            <div style="margin-right:10px;">Breeds</div>
            <div>Resources</div>
          </div>
        </div>
        <div class="col-md-3">Search</div>
        <div class="col-md-3">
          <div class="row">
            <a class="nav-link" style="margin-right:10px;">
              <router-link to="/login">Login</router-link>
            </a>
            <a class="nav-link">
              <router-link to="/sign-up">Sign up</router-link>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>