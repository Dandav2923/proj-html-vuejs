<template>
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-10 p-4">
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active d-flex justify-content-center" data-bs-interval="false">
                        <button class="btn btn-primary">Gadgets</button>
                        <button class="btn btn-primary">photography</button>
                        <button class="btn btn-primary">lifestyle</button>
                        <button class="btn btn-primary">fashion</button>
                        <button class="btn btn-primary">recipes</button>
                        <button class="btn btn-primary">travel</button>
                    </div>
                    <div class="carousel-item d-flex justify-content-center" data-bs-interval="false">
                        <button class="btn btn-primary">Gadgets</button>
                        <button class="btn btn-primary">photography</button>
                        <button class="btn btn-primary">lifestyle</button>
                        <button class="btn btn-primary">fashion</button>
                        <button class="btn btn-primary">recipes</button>
                        <button class="btn btn-primary">travel</button>
                    </div>
                    <div class="carousel-item d-flex justify-content-center">
                        <button class="btn btn-primary">Gadgets</button>
                        <button class="btn btn-primary">photography</button>
                        <button class="btn btn-primary">lifestyle</button>
                        <button class="btn btn-primary">fashion</button>
                        <button class="btn btn-primary">recipes</button>
                        <button class="btn btn-primary">travel</button>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <!-- <div 
                id="carouselExampleControls" 
                class="carousel slide" 
                data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active d-flex justify-content-center">
                        <button class="btn btn-primary">Gadgets</button>
                        <button class="btn btn-primary">photography</button>
                        <button class="btn btn-primary">lifestyle</button>
                        <button class="btn btn-primary">fashion</button>
                        <button class="btn btn-primary">recipes</button>
                        <button class="btn btn-primary">travel</button>
                    </div>
                    <div class="carousel-item d-flex justify-content-center">
                        <button class="btn btn-primary">Gadgets</button>
                        <button class="btn btn-primary">photography</button>
                        <button class="btn btn-primary">lifestyle</button>
                        <button class="btn btn-primary">fashion</button>
                        <button class="btn btn-primary">recipes</button>
                        <button class="btn btn-primary">travel</button>
                    </div>
                </div>
                <button 
                    class="carousel-control-prev" 
                    type="button" 
                    data-bs-target="#carouselExampleControls" 
                    data-bs-slide="prev">
                <span 
                    class="carousel-control-prev-icon" 
                    aria-hidden="true">
                </span>
                <span 
                    class="visually-hidden">
                        Previous
                </span>
                </button>
                <button 
                    class="carousel-control-next" 
                    type="button"
                    data-bs-target="#carouselExampleControls" 
                    data-bs-slide="next">
                <span 
                    class="carousel-control-next-icon" 
                    aria-hidden="true">
                </span>
                <span 
                    class="visually-hidden">
                        Next
                </span>
                </button>
            </div> -->
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'MainMid',
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/_variables.scss";
.container-fluid .row {
    background-color: $bg-color-blue;
}



</style>