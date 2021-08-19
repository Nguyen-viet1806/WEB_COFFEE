<template>
<div className="grid ftco-map-form">
        <div className="row no-gutters">
          <div className="col c-12 m-6 l-6">
            <div className="ftco-map-form-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7748.2314414112625!2d55.399563177847526!3d24.83830056215823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f8182ce86c0cf%3A0x84a28a452f5c71e7!2sHeart%20Lake%20Dubai!5e1!3m2!1svi!2s!4v1623664359555!5m2!1svi!2s"
                width="100%"
                height="300"
                style="border: 0 "
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="col c-12 m-6 l-6">
          <Form/>
          </div>
        </div>
      </div>
</template>

<script>
import Form from "@/components/User/MapForm/Form.vue";
export default {
  name: "MapForm",
  components: {
    Form,
  },
};
</script>

<style lang="scss" scoped>
@import "./MapForm.scss";
</style>