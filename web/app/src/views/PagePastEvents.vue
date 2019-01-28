<template>
  <div>
    <h1 class="mega-rainbow">Past Events</h1>  

    <div class="timeline-container" id="timeline-1">
      
      <div class="timeline">

        <div class="timeline-item" data-text="FATHER OF THE TURKS" v-for="(event, index) in past_events" :key="index">
          <div class="timeline__content">
          <!-- <h2>{{ event.title }}</h2> -->
            <img class="timeline__img" src="https://2018.mscc.mu/images/past-events/gwab2015.jpeg" />
            <h2 class="timeline__content-title">{{ event.year }}</h2>
            <p class="timeline__content-desc">{{ event.description }}</p>
             <!-- <a :href="event.link" class="cd-read-more">More Information</a> -->
          <span class="cd-date">{{ event.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      past_events: [
        {
          title: "global hello azure bootcamps",
          year: "2018",
          date: "25 April 2018",
          image: "",
          logo: "",
          link: "http://gwabmauritius.azurewebsites.net/",
          description:
            "In April of 2013 we held the first Global Windows Azure Bootcamp at more than 90 locations around the globe! In March 2014 we topped that with 136 locations! This year we are again doing a one day deep dive class to help thousands of people get up to speed on developing Cloud Computing Applications for Azure. In addition to this great learning opportunity we will have another set of hands on labs."
        },
        {
          title: "Developers Conference 2015",
          year: "2017",
          date: "23 - 25 April 2015",
          image: "",
          logo: "",
          link: "https://2017.mscc.mu/#/",
          description:
            'The Developers Conference 2015 is the first event in Mauritius, maybe even in the Indian Ocean which is organised as a "classic" conference. Yes, there have been various vendor-specific bootcamps in the past but never anything like this.'
        },
        {
          title: "global azure bootcamps",
          year: "2016",
          date: "23 - 25 April 2015",
          image: "",
          logo: "",
          link:
            "https://www.meetup.com/MauritiusSoftwareCraftsmanshipCommunity/events/226532196/",
          description:
            "Microsoft Azure provides key benefits for your business. Similar to previous years the MSCC would like to invite you to a full-day event of information on cloud technology provided by Microsoft."
        },
        {
          title: "Developers Conference 2016",
          year: "2016",
          date: "23 - 25 April 2015",
          image: "",
          logo: "",
          link: "https://2016.mscc.mu/",
          description:
            "After last year's success the Mauritius Software Craftsmanship Community (MSCC) is organising the next annual event in partnership with a number of local and international companies. Although the MSCC was founded back in 2013 it quickly became clear that our tropical island has a certain lack of informational and technical events. During some monthly meetups we spoke about this situation and that it would be very interesting and delightful to organise such an event."
        },
        {
          title: "Xamarin Dev Days",
          year: "2016",
          date: "23 - 25 April 2015",
          image: "",
          logo: "",
          link:
            "https://www.meetup.com/MauritiusSoftwareCraftsmanshipCommunity/events/233937043/",
          description:
            "Xamarin Dev Days provide attendees with an intense, hands-on learning experience. Spend the morning exploring mobile development with sessions from Xamarin, our technology partners, and members of your local developer community, then roll up your sleeves for an afternoon dedicated to diving into code."
        },
        {
          title: "DEVELOPERS CONFERENCE 2017",
          year: "2017",
          date: "23 - 25 April 2015",
          image: "",
          logo: "",
          link: "https://2017.mscc.mu/",
          description:
            "After the success of previous years the Mauritius Software Craftsmanship Community (MSCC) is organising the third edition of the Developers Conference in partnership with a number of local and international companies. Although the MSCC was founded back in 2013 it quickly became clear that our tropical island has a certain lack of informational and technical events. During some monthly meetups we spoke about this situation and that it would be very interesting and delightful to organise such an event."
        },
        {
          title: "DEVELOPERS CONFERENCE 2018",
          year: "2018",
          date: "23 - 25 April 2015",
          image: "",
          logo: "",
          link: "https://2018.mscc.mu/",
          description:
            "After the success of previous years the Mauritius Software Craftsmanship Community (MSCC) is organising the fourth edition of the Developers Conference in partnership with a number of local and international companies. Although the MSCC was founded back in 2013 it quickly became clear that our tropical island has a certain lack of informational and technical events. During some monthly meetups we spoke about this situation and that it would be very interesting and delightful to organise such an event."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
html * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
} 

.cd-date {

  color: white;
}

a {
  color: #acb7c0;
  text-decoration: none;
  cursor: pointer;
}

img {
  max-width: 100%;
}

h1,
h2 {
  font-weight: bold;
}

 @import url('https://fonts.googleapis.com/css?family=Cardo|Pathway+Gothic+One');
// Responsive
@mixin responsive() {
  @media only screen and (max-width: 767px) {
    @content;
  }
}

$content-font: Cardo;
$heading-font: 'Pathway Gothic One',
sans-serif;
$timeline-width:1170px;
$timeline-container-width:100%;

.timeline {
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: $timeline-width;
  position: relative;

  &__content {
    &-title {
      font-weight: normal;
      font-size: 66px;
      margin: -10px 0 0 0;
      transition: .4s;
      padding: 0 10px;
      box-sizing: border-box;
      font-family: $heading-font;
      color: #fff;
    }
    &-desc {
      margin: 0;
      font-size: 15px;
      box-sizing: border-box;
      color: rgba(#fff, .7);
      // font-family: $content-font;
      font-weight: normal;
      line-height: 25px;
    }
  }
  &:before {
    position: absolute;
    left: 50%;
    width: 2px;
    height: 100%;
    margin-left: -1px;
    content: "";
    background: rgba(255, 255, 255, .07);
    @include responsive() {
      left: 40px;
    }
  }
  &-item {
    padding: 40px 0;
    // opacity: .3;
    opacity: 1;

    // filter: blur(2px);
    filter: blur(0px);

    transition: .5s;
    box-sizing: border-box;
    width: calc(50% - 40px);
    display: flex;
    position: relative;
    transform: translateY(-80px); 
    &:before {
      content: attr(data-text);
      letter-spacing: 3px;
      width: 100%;
      position: absolute;
      color: rgba(#fff, .5);
      font-size: 13px;
      font-family: $heading-font;
      border-left: 2px solid rgba(#fff, .5);
      top: 70%;
      margin-top: -5px;
      padding-left: 15px;
      opacity: 0;
      right: calc(-100% - 56px); 

    }
    &:nth-child(even) {
      align-self: flex-end;
      &:before {
        right: auto;
        text-align: right;
        left: calc(-100% - 56px);
        padding-left: 0;
        border-left: none;
        border-right: 2px solid rgba(#fff, .5);
        padding-right: 15px;
      }
    }
    &--active {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0px);
      &:before {
        top: 50%;
        transition: .3s all .2s;
        opacity: 1;
      }
      .timeline__content-title {
        margin: -50px 0 20px 0;
      }
    }
    @include responsive() {
      align-self: baseline !important;
      width: 100%;
      padding: 0 30px 150px 80px;
      &:before {
        left: 10px !important;
        padding: 0 !important;
        top: 50px;
        text-align: center !important;
        width: 60px;
        border: none !important;
      }
      &:last-child {
        padding-bottom: 40px;
      }
    }
  }
  &__img {
    max-width: 100%;
    box-shadow: 0 10px 15px rgba(0, 0, 0, .4);
  }
  &-container {
    width: $timeline-container-width;
    position: relative;
    padding: 80px 0;
    transition: .3s ease 0s;
    background-attachment: fixed;
    background-size: cover;
    &:before {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(31, 30, 71, 0.05);
      content: "";
    }
  }
  &-header {
    width: 100%;
    text-align: center;
    margin-bottom: 80px;
    position: relative;
    &__title {
      color: #fff;
      font-size: 46px;
      font-family: $content-font;
      font-weight: normal;
      margin: 0;
    }
    &__subtitle {
      color: rgba(255, 255, 255, .5);
      font-family: $heading-font;
      font-size: 16px;
      letter-spacing: 5px;
      margin: 10px 0 0 0;
      font-weight: normal;
    }
  }
}
</style>
