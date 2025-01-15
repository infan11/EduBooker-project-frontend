import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-white text-black p-10">
  <nav>
    <h6 className="footer-title text-xl font-bold mb-3">Services</h6>
    <a className="link link-hover text-sm text-gray-700 hover:text-black transition">Branding</a>
    <a className="link link-hover text-sm text-gray-700 hover:text-black transition">Design</a>
    <a className="link link-hover text-sm text-gray-700 hover:text-black transition">Marketing</a>
    <a className="link link-hover text-sm text-gray-700 hover:text-black transition">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title text-xl font-bold mb-3">Company</h6>
    <a className="link link-hover text-sm text-gray-700 hover:text-black transition">About us</a>
    <a className="link link-hover text-sm text-gray-700 hover:text-black transition">Contact</a>
    <a className="link link-hover text-sm text-gray-700 hover:text-black transition">Jobs</a>
    <a className="link link-hover text-sm text-gray-700 hover:text-black transition">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title text-xl font-bold mb-3">Legal</h6>
    <a className="link link-hover text-sm text-gray-700 hover:text-black transition">Terms of use</a>
    <a className="link link-hover text-sm text-gray-700 hover:text-black transition">Privacy policy</a>
    <a className="link link-hover text-sm text-gray-700 hover:text-black transition">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title text-xl font-bold mb-3">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-gray-700">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item bg-white text-gray-700 shadow-md focus:outline-none" />
        <button className="btn btn-primary join-item bg-white text-blue-500 shadow-md hover:bg-blue-600 hover:text-white">
          Subscribe
        </button>
      </div>
    </fieldset>
  </form>
</footer>

        </div>
    );
};

export default Footer;