

const Contact2= () => {
  return (
    <div className="relative w-full bg-gray-900 text-white">
      <div 
        className="absolute inset-0 bg-black opacity-60 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      ></div>
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
        <div className="flex items-center justify-center gap-2 text-amber-400">
          <span>Home</span>
          <span>/</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Contact2;