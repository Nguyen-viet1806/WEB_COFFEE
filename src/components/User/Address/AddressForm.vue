<template>
  <div className="ftco-intro-form">
    <h3>BOOK A TABLE</h3>
    <form action="#" className="form-in-address">
      <div className="row no-gutters">
        <div className="col c-12 m-12">
          <div className="form-in-address-2">
            <div className="row no-gutters">
              <div className="col c-12 m-6">
                <div className="form-in-address-input">
                  <input type="text" placeholder="First Name" />
                </div>
              </div>
              <div className="col c-12 m-6">
                <div className="form-in-address-input">
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col c-12 m-12">
          <div className="form-in-address-3">
            <div className="row no-gutters">
              <div className="col c-12 m-4">
                <div className="form-in-address-input">
                  <input type="text" placeholder="Date" />
                </div>
              </div>
              <div className="col c-12 m-4">
                <div className="form-in-address-input">
                  <input type="text" placeholder="Time" />
                </div>
              </div>
              <div className="col c-12 m-4">
                <div className="form-in-address-input">
                  <input type="text" placeholder="Phone" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col c-12 m-12">
          <div className="form-in-address-2">
            <div className="row no-gutters">
              <div className="col c-12 m-6">
                <div className="form-in-address-input">
                  <input type="text" placeholder="Message" />
                </div>
              </div>
              <div className="col c-12 m-6">
                <div className="form-in-address-input">
                  <button>Appointment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddressForm",
};
</script>

<style lang="scss" scoped>
@import './AddressUnit.scss';
</style>