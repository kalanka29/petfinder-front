<!--@author Kalanka Siyambalapitiya-->
<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <img src="../assets/images/pet-finder-footer.png" />
        </div>
        <div class="col-md-9"></div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="row">
            <!-- <div class="col-md-3"></div> -->
            <div class="col-md-4">
              <h5>About pet finder</h5>
              <ul>
                <div>FAQ</div>
                <div>Dress</div>
                <div>Terms of service</div>
                <div>Mobile site and apps</div>
                <div>For developers</div>
                <div>Contact Us</div>
              </ul>
            </div>
            <div class="col-md-4">
              <h5>Pet adoption</h5>
              <ul>
                <div>Dog Adoption</div>
                <div>Cat Adoption</div>
                <div>Other Pet Adoption</div>
                <div>Pet Adoption Stories</div>
                <div>Search Adoption organizations</div>
              </ul>
            </div>
            <div class="col-md-4">
              <h5>Pet care topics</h5>
              <ul>
                <div>Dog Care</div>
                <div>Dog Breeds</div>
                <div>Cat Care</div>
                <div>Cat Breeds</div>
                <div>All Pet Care</div>
                <div>Pet Care Videos</div>
                <div>Hedivping Pets</div>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-5">
              <ul>
                <div>
                  <a href>
                    <span>SITEMAP</span>
                  </a>
                </div>
                <div>
                  <a href>
                    <span>PRIVACY POLICY</span>
                  </a>
                </div>
                <div>
                  <a href>
                    <span>ABOUT OUR ADS</span>
                  </a>
                </div>
                <div>
                  <a href>
                    <span>SHELTER & RESCUE LOGIN</span>
                  </a>
                </div>
                <div>
                  <a href>
                    <span>SITEMAP</span>
                  </a>
                </div>
              </ul>
            </div>
            <div class="col-md-7">
              <p>To get the latest on pet adoption and pet care, sign up for the Petfinder newsletter.</p>
              <router-link to="/register">
                <button class="btn btn-primary" type="button">Sign Up</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sub-footer">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-6">
          <p
            style="font-style:white;"
          >©2019 Petfinder.com All trademarks are owned by Société des Produits Nestlé S.A., or used with permission.</p>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-4 social-media">
          <a href="https://www.facebook.com/Petfinder">
            <img src="../assets/images/fb.png" />
          </a>
          <a href="https://www.instagram.com/petfinder">
            <img src="../assets/images/in.png" />
          </a>
          <a href="https://www.facebook.com/Petfinder">
            <img src="../assets/images/google.png" />
          </a>
          <a href="https://twitter.com/Petfinder">
            <img src="../assets/images/twitter.png" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.social-media a {
  margin-left: 20px;
}
.sub-footer {
  background: rgb(32, 0, 32);
}
a {
  font-family: Nexa Heavy, arial, helvetica, sans-serif;
}
</style>