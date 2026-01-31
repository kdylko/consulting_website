export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 md:py-12">
      <div className="container-max section-padding">
        <div className="text-center">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} Data Science & ML Consulting. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

