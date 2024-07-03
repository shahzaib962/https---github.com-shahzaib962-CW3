<template>
  <div class="container" v-if="lessons.length">
                        <div class="row justify-content-evenly">
                            
                            <!-- Displaying sorted and filtered lessons -->
                            <div v-for="(item, index) in lessons" :key="index" class="my-3 col-sm-6 col-lg-4" >
                                <div class="card ">
                                        <!-- Lesson image -->
                                        <img v-bind:src="item.image || item.picture" class="card-img-top " alt="...">
                                        <div class="card-body mt-3 mb-3">
                                            <div class="row">
                                                <div class="col-12">
                                                    <!-- Lesson details -->
                                                    <p class="card-title ">
                                                        <span class="fw-bold">Subject:</span>
                                                        <span> {{ item.subject }}</span>
                                                    </p>
                                                    <p class="card-text">
                                                        <span class="fw-bold">Description:</span>
                                                        <span class="">{{ item.description }}</span>
                                                    </p>
                                                </div>
                                                <div class="col-12 ">
                                                    <span class="fw-bold">Location:</span>
                                                    <span>{{item.location}}</span>
                                                </div>
                                                <div class="col-12 ">
                                                    <span class="fw-bold">Available Inventory:</span>
                                                    <span>{{item.availability}}</span>
                                                </div>
                                            </div>
                                            <div class="row align-items-center text-start g-0">
                                                <div class="col-12  ">
                                                    <span class="fw-bold">Price:</span>
                                                    <span>{{ item.price }} AED</span>
                                                </div>
                                            </div>
                                            <!-- Add to cart button -->
                                            <div class="row">
                                                <div class="col-12 ">
                                                    <a
                                                        v-if="canAddToCart(item)"
                                                        v-on:click="addToCart(item)"
                                                        href="#"
                                                        class="btn btn-primary"
                                                    >
                                                        ADD TO CART
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                               
                                </div>
                                
                            </div>
                            
                        </div>
            
</template>
<script>
export default {
  name: "LessonComponent",
  props: {
    lessons: { type: Array, required: true },
    canAddToCart: { type: Function, required: true },
    cartCount: { type: Function, required: true },
    showProduct: { type: Boolean, required: true },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    
    addToCart(lesson) {
      this.$emit("add-to-cart", lesson);
    },
//    ServerImage(img) {
//       // Construct the full URL for an image
//       const NodeServerUrl = "https://https-github-com-shahzaib962-pets-backend.onrender.com";
//       const Image = img.split("/").pop().trim();
//       const FullPath = NodeServerUrl + "/" + Image;
//       return FullPath;
//     },
  },
};
</script>
