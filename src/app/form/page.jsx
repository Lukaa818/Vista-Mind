'use client'
import Result from "@/components/Result";
import { use, useState } from "react";

export default function Form() {
  const [showResult, setShowResult] = useState(false);
  const [disorder, setDisorder] = useState("");
  const [colors, setColors] = useState(["beige", "orange", "blue", "pink", "green"]);
  const [formData, setFormData] = useState({
    anxiety: false,
    ocd: false,
    depression: false,
    adhd: false,
    calmHappy: "",
    anxiousUncomfortable: "",
    vivid: "",
    warmCool: "",
    relaxed: "",
    furniture: "",
    materials: "",
    minimalist: "",
    appealingFurniture: "",
    overHyped: "",
    newTrends: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    // console.log("ID: " + id);
    // console.log("Value: " + value);

    if (id == "anxiety" || id == "ocd" || id == "depression" || id == "adhd") {
      setFormData(prevState => ({
        ...prevState,
        [id]: !prevState[id]
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [id]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    if (formData.anxiety) {
      setDisorder("Anxiety");
    } else if (formData.ocd) {
      setDisorder("OCD");
    } else if (formData.depression) {
      setDisorder("Depression");
    } else {
      setDisorder("ADHD");
    }

    setColors(prevColors => prevColors.filter(color => !formData.anxiousUncomfortable.includes(color)));

    setShowResult(true);
  }

  return (
    <>
      {!showResult && <div 
          className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-12 py-10 bg-cover bg-center" 
          style={{ backgroundImage: "url('/img/6.png')" }}
      >
          <div className="w-full max-w-3xl bg-[#d4a98f]/80 backdrop-blur-md p-8 sm:p-12 rounded-xl shadow-xl border border-[#b98a6f]">
              <header className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-[#5a3e2b] mb-3 font-sedgwick">
                      Vista Mind Questionnaire
                  </h1>
                  <p className="text-lg text-[#785b48] leading-relaxed font-poppins">
                      Discover your personalized room design! Answer these questions, and our AI will craft your dreamy space.
                  </p>
              </header>
              
              <form className="space-y-6 font-poppins" onSubmit={handleSubmit}>
                  <fieldset className="space-y-4 p-4 rounded-lg text-[#5a3e2b]" onChange={handleChange}>
                    <label className="text-[#5a3e2b] font-medium">What disorder(s) do you have, if any?</label>
                    <div>
                      <input type="checkbox" id="anxiety" name="anxiety" value="anxiety" />
                      <label className="ml-1" htmlFor="anxiety">Anxiety</label>
                    </div>

                    <div>
                      <input type="checkbox" id="ocd" name="ocd" value={"ocd"} />
                      <label className="ml-1" htmlFor="ocd">OCD</label>
                    </div>

                    <div>
                      <input type="checkbox" id="depression" name="depression" value={"depression"} />
                      <label className="ml-1" htmlFor="depression">Depression</label>
                    </div>

                    <div>
                      <input type="checkbox" id="adhd" name="adhd" value={"adhd"} />
                      <label className="ml-1" htmlFor="adhd">ADHD</label>
                    </div>
                  </fieldset>

                  {[
                      // {id: 'disorder', label: "What disorder(s) do you have, if any?"},
                      { id: 'calmHappy', label: 'What colors make you feel calm or happy? Why?' },
                      { id: 'anxiousUncomfortable', label: 'Are there colors or patterns that make you feel anxious or uncomfortable?' },
                      { id: 'vivid', label: 'Do you prefer bright vivid colors or softer colors? How do they affect your mood?' },
                      { id: 'warmCool', label: 'Do you like warm tones or cool tones? How do they affect your mood?' },
                      { id: 'relaxed', label: 'Describe a place that made you feel relaxed (colors, lighting, etc.).' },
                      { id: 'furniture', label: 'Do you prefer modern, contemporary, or traditional furniture? Why?' },
                      { id: 'materials', label: 'Are there specific materials or finishes you are drawn to (wood, metal, glass, fabric, leather)?' },
                      { id: 'minimalist', label: 'What’s your opinion on minimalist vs. maximalist furniture styles?' },
                      { id: 'appealingFurniture', label: 'Have you noticed any appealing furniture trends lately?' },
                      { id: 'overHyped', label: 'Which furniture trend do you think is overhyped right now?' },
                  ].map(({ id, label }) => (
                      <div key={id} className="space-y-2">
                          <label htmlFor={id} className="text-[#5a3e2b] font-medium">
                              {label}
                          </label>
                          {/* <textarea 
                              id={id} 
                              className="w-full p-3 border border-[#b98a6f] rounded-lg bg-[#f2e3d5] text-[#5a3e2b] placeholder-[#9c7a66] focus:outline-none focus:ring-2 focus:ring-[#b98a6f] resize-none overflow-hidden"
                              required 
                          /> */}
                          {/* <textarea 
                              id={id} 
                              className="w-full p-3 border border-[#b98a6f] rounded-lg bg-[#f2e3d5] text-[#5a3e2b] placeholder-[#9c7a66] focus:outline-none focus:ring-2 focus:ring-[#b98a6f] resize-none"
                              required 
                              style={{
                                  overflowY: "auto", // Keeps scrollbar if needed
                                  scrollbarWidth: "thin", // For Firefox
                                  scrollbarColor: "#b98a6f #f2e3d5" // Custom scrollbar colors
                              }}
                          /> */}
                          <textarea 
                              id={id} 
                              className="w-full p-3 border border-[#b98a6f] rounded-lg bg-[#f2e3d5] text-[#5a3e2b] placeholder-[#9c7a66] focus:outline-none focus:ring-2 focus:ring-[#b98a6f] resize-none overflow-auto scrollbar-hide"
                              required
                              onChange={handleChange}
                          />
                      </div>
                  ))}
                  
                  <div className="space-y-2">
                      <label htmlFor="new-trends" className="text-[#5a3e2b] font-medium">
                          How likely are you to adopt new trends compared to classic designs? (1 = modern, 5 = classic)
                      </label>
                      <select 
                          id="newTrends" 
                          className="w-full p-3 border border-[#b98a6f] rounded-lg bg-[#f2e3d5] text-[#5a3e2b] focus:outline-none focus:ring-2 focus:ring-[#b98a6f]" 
                          required
                          defaultValue={""}
                          onChange={handleChange}
                      >
                          <option value="" disabled>Select an answer...</option>
                          {[1, 2, 3, 4, 5].map(num => (
                              <option key={num} value={num}>{num}</option>
                          ))}
                      </select>
                  </div>

                  <button 
                      type="submit"
                      className="w-full py-3 bg-[#8a5a44] text-white font-semibold rounded-lg hover:bg-[#7a4e3a] focus:outline-none focus:ring-2 focus:ring-[#b98a6f]"
                  >
                      Submit
                  </button>
              </form>
          </div>
      </div>}

      {showResult && <Result disorder={disorder} colors={colors} />}

    </>
  );
};