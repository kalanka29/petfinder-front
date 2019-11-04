<!--@author Kalanka Siyambalapitiya-->
<template>
  <div class="container">
    <section>
      <div class="cover-image">
        <img src="../assets/images/cover.jpg" alt />
      </div>
    </section>
    <!--Search pets section-->
    <section>
      <div class="row">
        <div class="col-md-4">
          <input type="text" placeholder="enter a petName" />
        </div>
        <div class="col-md-6">
          <div class="row"></div>
          <div class="row">
            <router-link to="/search/cats">
              <button class="selection-pet" type="button">
                <img
                  src="https://image.flaticon.com/icons/svg/61/61624.svg"
                  style="width:30px;height:30px;"
                  alt
                />
                <span>Find a Cat</span>
              </button>
            </router-link>
            <router-link to="/search/dogs">
              <button class="selection-pet">
                <img
                  src="https://image.flaticon.com/icons/png/512/91/91544.png"
                  style="width:30px;height:30px;"
                  alt
                />
                <span>Find a Dog</span>
              </button>
            </router-link>
          </div>
          <div></div>
        </div>
        <div class="col-md-2"></div>
      </div>
    </section>
    <!--Planning to Adopt a Pet section-->
    <section>
      <div class="jumbotron">
        <div class="row" style="background-color: #fff;margin-top:30px;margin-bottom:30px;">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <h4>Planning to adopt a pet ?</h4>
          </div>
          <div class="col-md-4"></div>
          <div class="row" style="margin-bottom:45px;">
            <div class="col-md-4">
              <img
                src="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2017/08/PCE_Blue_Icon-18.png"
                alt
              />
              <h5>Check List for Ne Adopters</h5>
              <span>Help make the transition, as smooth as possible.</span>
              <button class="btn btn-primary" type="button">Learn More</button>
            </div>
            <div class="col-md-4">
              <img
                src="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2017/08/PCE_Blue_Icon-17.png"
                alt
              />
              <h5>Finding the Right Pet</h5>
              <span>Get tips on figuring out who you should adopt</span>
              <button class="btn btn-primary" type="button">Learn More</button>
            </div>
            <div class="col-md-4">
              <img
                src="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2017/08/PCE_Blue_Icon-8.png"
                alt
              />
              <h5>Finding the Right Pet</h5>
              <span>Get tips on figuring out who you should adopt</span>
              <button class="btn btn-primary" type="button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--recently viewd pets-->
    <section>
      <div class="row recently-pets">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <h4>Recently viewd pets</h4>
        </div>
        <div class="col-md-4"></div>
        <div class="card" style="width: 15rem;">
          <img
            src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">Rose</h5>
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style="width: 15rem;">
          <img
            src="data:image/jpeg;base64,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"
            class="card-img-top"
            alt
          />
          <div class="card-body">
            <h5 class="card-title">Tiki</h5>
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style="width: 15rem;">
          <img
            src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">Duga</h5>
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style="width: 15rem;">
          <img
            src="data:image/jpeg;base64,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"
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">Lopez</h5>
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </section>
    <!--Adoption article section-->
    <section>
      <div class="jumbotron">
        <div>
          <h3>Adoption Articles</h3>
        </div>
        <div class="row">
          <div class="card" style="width:30em;">
            <img
              src="data:image/jpeg;base64,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"
              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title">Cats Adoption Articles</h5>
              <p class="card-text">Helpful insights on what to expect</p>
              <router-link to="/pet-adoption/cat-adoption">
                <button class="btn btn-primary" type="button">Read more</button>
              </router-link>
            </div>
          </div>
          <div class="card" style="width:30em;">
            <img
              src="data:image/jpeg;base64,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"
              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title">Dogs adoption articles</h5>
              <p class="card-text">Learn more about caring for your new dog</p>
              <router-link to="/pet-adoption/dog-adoption">
                <button class="btn btn-primary" type="button">Read more</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home"
};
</script>
<style  scoped>
.cover-image img {
  width: 100%;
  height: 300px;
}
.recently-pets {
  background-color: aquamarine;
}

.card {
  margin-right: 20px;
}
.card-img-top {
  width: 100%;
  height: 50%;
}
.selection-pet {
  height: 7em;
  width: 15em;
  background-color: #6504b5;
}
</style>
