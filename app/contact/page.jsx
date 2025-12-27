"use client";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import QuoteModal from "../components/QuoteModal";
import Toast from "../components/Toast";
import Contact from "../components/Contact";

export default function ContactPage() {
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(false);

  return (
    <>
      <Header currentPage="contact" openModal={() => setShowModal(true)} />
      
      <main className="flex-grow relative">
        <Contact />
      </main>

      <Footer currentPage="contact" openModal={() => setShowModal(true)} />

      {showModal && <QuoteModal close={() => setShowModal(false)} showToast={() => setToast(true)} />}
      <Toast show={toast} />
    </>
  );
}
