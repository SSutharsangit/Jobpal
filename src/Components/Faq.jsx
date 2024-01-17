import React from 'react'

function Faq() {
  return (
    <div className=' row'>
        <div className=' text-center fw-bold fs-1 text-blue '>Frequently asked questions</div>
        <div className=' container-fluid col-10 my-5 '> 
        <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Can I submit a general application if there are no current openings?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">While we prefer applications for specific openings, you can submit a general application through our General Application page. We will keep your information on file for future opportunities.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      How can I check the status of my application?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">You can check the status of your application by logging into your account on our website. If you have any specific inquiries, you can also contact our HR department at hr@example.com.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      How long does the recruitment process typically take?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The duration of our recruitment process can vary depending on the position and the number of applicants. We strive to review applications promptly and keep candidates informed of their status. You can check the estimated timeline in the job posting, and we appreciate your patience throughout the process.</div>
    </div>
  </div>
</div>
        </div>
    </div>
  )
}

export default Faq