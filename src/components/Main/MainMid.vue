<template>
<div class="container-fluid">
    <div class="container">
        <div class="row">
        <div class="col-12 p-4">
            <!-- creazione statica dello slider di bottoni -->
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active d-flex justify-content-center" data-bs-interval="false">
                        <i class="fas fa-chevron-left color-text-black"></i>
                        <button class="btn btn-primary">Gadgets</button>
                        <button class="btn btn-primary">photography</button>
                        <button class="btn btn-primary">lifestyle</button>
                        <button class="btn btn-primary">fashion</button>
                        <button class="btn btn-primary">recipes</button>
                        <button class="btn btn-primary">travel</button>
                        <i class="fas fa-chevron-right color-text-black"></i>
                    </div>
                </div>
                <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button> -->
            </div>
        </div>
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
.container-fluid {
    background-color: $bg-color-blue;
}
.btn.btn-primary{
    background-color: $bg-color-semi-black;
    border: 0;
    padding: 0.3em 1.5em 0.3em 1.5em;
    margin: 0 50px 0 50px;
    text-transform: uppercase;
}
.color-text-black {
    color: $text-color-black;
}

</style>