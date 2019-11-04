<!--@author Kalanka Siyambalapitiya-->
<template>
  <div class="row">
    <div class="col-md-4">
      filters
      <ul>
        <li>age</li>
        <li>age</li>
        <li>age</li>
        <li>age</li>
        <li>age</li>
        <li>age</li>
      </ul>
    </div>
    <div class="col-md-8">
      cats
      <div class="row">
        <div class="card" style="width: 18rem;">
          <img
            src="data:image/jpeg;base64,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"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>