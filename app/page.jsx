"use client";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QuoteModal from "./components/QuoteModal";
import Toast from "./components/Toast";
import Home from "./components/Home";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(false);

  return (
    <>
      <Header currentPage="home" openModal={() => setShowModal(true)} />
      
      <main className="flex-grow relative">
        <Home setPage={() => {}} openModal={() => setShowModal(true)} />
      </main>

      <Footer currentPage="home" openModal={() => setShowModal(true)} />

      {showModal && <QuoteModal close={() => setShowModal(false)} showToast={() => setToast(true)} />}
      <Toast show={toast} />
    </>
  );
}