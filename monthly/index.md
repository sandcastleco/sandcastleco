---
layout: default
---

<div class="container" style="padding-top: 60px; padding-bottom: 60px;">
  <div class="row">
    <div class="col-md-8 center-block">
      <p class="lead">Dear readers of <em>The Monthly</em>,</p>
      <p class="lead">At Sandcastle, we believe in the power of creative, independent people. People who work on their work with care, thoughtfulness, authenticity, and autonomy. These people, people like you, are the people that help a community become vibrant, unique, and beautiful.</p>

      <p class="lead">They own shops, make movies and paintings and words and games, and make their corner of the world brighter. Everywhere we go, we look for these people. Planet Fun in Savannah, Georgia. Fritz and Sparrow in Green Bay, Wisconsin. Sotheran's in London. Umami Mart in Oakland. Case for Making in the Sunset. Comet Café in Milwaukee. Mizuba Tea in Portland. These businesses and the people who run them reflect everything we value – creativity, mindfulness, education, and courage to love openly and live freely.</p>

      <p class="lead">We want to hang out with these people, and we think they should have websites that fully reflect the quality and care they put into their work.</p>

      <p class="lead">Thank you for visiting us — if you're interested in chatting about games, education, or a web development project, send us a message any time. We'd love to work with you.</p>

      <p class="lead"><em>Cheers,<br>Sandcastle</em></p>

      <div class="text-center">
        <a href="/">{% include logo.html fill="blue" %}</a>
      </div>
    </div>
  </div>
</div>

<section class="section">
  <div class="container">
    <form action="https://getsimpleform.com/messages?form_api_token=c93c6644db4b49b6e6bd5df28db8a3dc" method="post">
      <input type='hidden' name='redirect_to' value='http://sandcastle.co/thank-you' />
      <div class="form-group">
        <label class="sr-only" for="name-input">Name</label>
        <input type="text" class="form-control" id="name-input" name="name" placeholder="Your name">
      </div>
      <div class="form-group">
        <label class="sr-only" for="email-input">Email</label>
        <input type="email" class="form-control" id="email-input" name="email" placeholder="Your email">
      </div>
      <div class="form-group">
        <label class="sr-only" for="message-input">Message</label>
        <textarea class="form-control" id="message-input" name="message" placeholder="Your message" rows="4"></textarea>
      </div>
      <button type="submit" class="btn btn-ghost">Send message</button>
    </form>
  </div>
</section>
