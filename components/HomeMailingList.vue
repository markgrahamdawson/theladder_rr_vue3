<template>
  <div class="w-full">
    <div
      class="w-full md:bg-[url('~/assets/mailing.png')] md:bg-no-repeat md:bg-cover md:bg-center bg-orange flex items-center justify-center space-y-6 font-josan"
    >
      <div class="py-20 px-4 sm:px-0">
        <div class="text-white text-center font-semibold space-y-5">
          <div class="text-3xl uppercase">Join our mailing list</div>
          <div>
            Newsletter, Events, Updates, hear about everything on our mailing
            list!
          </div>
        </div>

        <!-- Begin Mailchimp Signup Form -->
        <div id="mc_embed_signup">
          <form
            action="https://gmail.us21.list-manage.com/subscribe/post?u=939b6c4835d10f5143fb088ba&amp;id=71a23d111d&amp;f_id=003555e1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_self"
          >
            <div
              id="mc_embed_signup_scroll"
              class="sm:flex space-y-3 sm:space-y-0 sm:space-x-2 pt-10 px-8"
            >
              <!-- <h2>JOIN NOW</h2> -->
              <!-- <div class="indicates-required">
                <span class="asterisk">*</span> indicates required
              </div> -->
              <div class="mc-field-group">
                <!-- <label for="mce-EMAIL"
                  >Email Address <span class="asterisk">*</span>
                </label> -->
                <input
                  :class="`px-2 py-2 w-full rounded-md w-full sm:w-[300px]`"
                  placeholder="youremail@email.com"
                  type="email"
                  value=""
                  name="EMAIL"
                  class="required email"
                  id="mce-EMAIL"
                  required
                />
                <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
              </div>
              <div id="mce-responses" class="clear foot">
                <div
                  class="response"
                  id="mce-error-response"
                  style="display: none"
                ></div>
                <div
                  class="response"
                  id="mce-success-response"
                  style="display: none"
                ></div>
              </div>
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px" aria-hidden="true">
                <input
                  type="text"
                  name="b_939b6c4835d10f5143fb088ba_71a23d111d"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="optionalParent w-full">
                <div class="clear foot">
                  <input
                    :class="`bg-teal text-white font-semibold rounded-md px-2 py-2 w-full uppercase`"
                    placeholder="youremail@email.com"
                    type="submit"
                    value="JOIN NOW"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button"
                  />
                  <!-- <p class="brandingLogo">
                    <a
                      href="http://eepurl.com/isrsog"
                      title="Mailchimp - email marketing made easy and fun"
                      ><img
                        src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"
                    /></a>
                  </p> -->
                </div>
              </div>
            </div>
          </form>
        </div>

        <!--End mc_embed_signup-->

        <!-- <div
          class="w-full mt-5 flex flex-col sm:flex-row justify-center items-center space-x-4"
        >
          <div class="w-2/3 m-auto">
            <input
              v-model="email"
              class="px-2 py-2 w-full rounded-md"
              id="email"
              type="text"
              placeholder="youremail@email.com"
            />
          </div>
          <div class="w-1/3 mx-auto pt-4 sm:pt-0">
            <button
              @click="pingMailChimp"
              class="bg-teal text-white font-semibold rounded-md px-2 py-2 w-full uppercase"
            >
              Join now
            </button>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const email = ref("");
const pingMailChimp = () => {
  console.log(email.value);
};
</script>
