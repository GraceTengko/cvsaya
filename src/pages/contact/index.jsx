const Contact = () => {
  return (
    <div className="contant-section px-3 px-lg-4 pb-4" id="contact">
    <h2 className="h3 text mb-3">Contact</h2>
    <div className="row">
      <div className="col-md-7 d-print-none">
        <div className="my-2"><form action="https://formspree.io/your@email.com" method="POST">
            <div className="row">
              <div className="col-6">
                <input className="form-control" type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="col-6">
                <input className="form-control" type="email" id="email" name="_replyto" placeholder="Your E-mail" required />
              </div>
            </div>
            <div className="form-group my-2">
              <textarea className="form-control" style={{resize: 'none'}} id="message" name="message" rows={4} placeholder="Your Message" required defaultValue={""} />
            </div>
            <button className="btn btn-primary mt-2" type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="col">
        <div className="mt-2">
          <h3 className="h6">Address</h3>
          <div className="pb-2 text-secondary">Tumpaan, Minahasa Selatan, Sulawesi Utara, Indonesia</div>
          <h3 className="h6">Phone</h3>
          <div className="pb-2 text-secondary">+0812-1122-0087</div>
          <h3 className="h6">Email</h3>
          <div className="pb-2 text-secondary">gracetengko@gmail.com</div>
        </div>
      </div>
      <div className="col d-none d-print-block">
        <div className="mt-2">
          <div>
            <div className="mb-2">
              <div className="text-dark"><i className="fab fa-twitter mr-1" /><span>https://twitter.com/templateflip</span>
              </div>
            </div>
            <div className="mb-2">
              <div className="text-dark"><i className="fab fa-facebook mr-1" /><span>https://www.facebook.com/templateflip</span>
              </div>
            </div>
            <div className="mb-2">
              <div className="text-dark"><i className="fab fa-instagram mr-1" /><span>https://www.instagram.com/templateflip</span>
              </div>
            </div>
            <div className="mb-2">
              <div className="text-dark"><i className="fab fa-github mr-1" /><span>https://github.com/templateflip</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact