import React, { useEffect, useState } from "react";

/**
 * ParentPopupForm.jsx
 * Full final component — tabs, forms, validation, WhatsApp submit, privacy disclaimer,
 * sample-pair optional question (all tabs), success popup.
 *
 * IMPORTANT: Update WHATSAPP_NUMBER if you want a different recipient.
 */

const tabs = [
  "School Chairman / Director",
  "Principal",
  "Admin Officer",
  "Teacher (Representing School)",
  "Parent",
];

const formFields = {
  "School Chairman / Director": [
    {
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Enter full name",
    },
    {
      label: "Mobile Number",
      type: "number ",
      required: true,
      placeholder: "Enter mobile number",
    },
    {
      label: "Email ID",
      type: "email",
      required: true,
      placeholder: "Enter email address",
    },
    {
      label: "School Name",
      type: "text",
      required: true,
      placeholder: "Enter school name",
    },
    {
      label: "District / Location",
      type: "text",
      required: true,
      placeholder: "Enter location",
    },

    {
      label: "Approx. Shoe Quantity Required",
      type: "select",
      required: true,
      options: [
        "100–250 pairs",
        "250–500 pairs",
        "500–1000 pairs",
        "1000+ pairs",
        "Not sure",
      ],
    },

    // STEP 8 - optional for all tabs (added later programmatically too)
  ],

  Principal: [
    {
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Enter full name",
    },
    {
      label: "Mobile Number",
      type: "number",
      required: true,
      placeholder: "Enter mobile number",
    },
    {
      label: "Email ID",
      type: "email",
      required: true,
      placeholder: "Enter email address",
    },
    {
      label: "School Name",
      type: "text",
      required: true,
      placeholder: "Enter school name",
    },
    {
      label: "District / Location",
      type: "text",
      required: true,
      placeholder: "Enter location",
    },

    {
      label: "Approx. Shoe Quantity Required",
      type: "select",
      required: true,
      options: [
        "100–250 pairs",
        "250–500 pairs",
        "500–1000 pairs",
        "1000+ pairs",
        "Not sure",
      ],
    },
  ],

  "Admin Officer": [
    {
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Enter full name",
    },
    {
      label: "Mobile Number",
      type: "number",
      required: true,
      placeholder: "Enter mobile number",
    },
    {
      label: "Email ID",
      type: "email",
      required: true,
      placeholder: "Enter email address",
    },
    {
      label: "School Name",
      type: "text",
      required: true,
      placeholder: "Enter school name",
    },
    {
      label: "District / Location",
      type: "text",
      required: true,
      placeholder: "Enter location",
    },

    {
      label: "Approx. Shoe Quantity Required",
      type: "select",
      required: true,
      options: [
        "100–250 pairs",
        "250–500 pairs",
        "500–1000 pairs",
        "1000+ pairs",
        "Not sure",
      ],
    },
  ],

  "Teacher (Representing School)": [
    {
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Enter full name",
    },
    {
      label: "Mobile Number",
      type: "number",
      required: true,
      placeholder: "Enter mobile number",
    },
    {
      label: "Email ID",
      type: "email",
      required: true,
      placeholder: "Enter email address",
    },
    {
      label: "School Name",
      type: "text",
      required: true,
      placeholder: "Enter school name",
    },
    {
      label: "District / Location",
      type: "text",
      required: true,
      placeholder: "Enter location",
    },

    {
      label: "Approx. Shoe Quantity Required",
      type: "select",
      required: true,
      options: [
        "100–250 pairs",
        "250–500 pairs",
        "500–1000 pairs",
        "1000+ pairs",
        "Not sure",
      ],
    },
  ],

  Parent: [
    {
      label: "Parent Name",
      type: "text",
      required: true,
      placeholder: "Enter parent name",
    },
    {
      label: "Mobile Number",
      type: "number",
      required: true,
      placeholder: "Enter mobile number",
    },
    {
      label: "Email ID",
      type: "email",
      required: true,
      placeholder: "Enter email address",
    },

    {
      label: "What is your child’s shoe size or school grade?",
      type: "select",
      required: true,
      options: ["LKG–1", "2–5", "6–8", "9–12", "Shoe size mentioned"],
    },

    {
      label: "What is your child’s school grade?",
      type: "select",
      required: true,
      options: ["LKG–1", "2–5", "6–8", "9–12"],
    },

    {
      label: "Shoe Size",
      type: "number",
      required: true,
      placeholder: "Enter child's shoe size",
    },
  ],
};

// Add STEP 8 optional question (sample pair) to every tab definition (non-destructive)
Object.keys(formFields).forEach((k) => {
  formFields[k].push({
    label: "Would you like a sample shoe pair?",
    type: "select",
    required: false,
    options: ["Yes", "No", "Maybe"],
  });
});

const ParentPopupForm = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  // Put your WhatsApp number here (with country code). You provided +91 earlier.
  const WHATSAPP_NUMBER = "919500694734";

  useEffect(() => {
    // auto close success popup after 6s if shown
    if (!showSuccess) return;
    const t = setTimeout(() => setShowSuccess(false), 6000);
    return () => clearTimeout(t);
  }, [showSuccess]);

  if (!open) return null;

  const handleInput = (label, value) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
    setErrors((prev) => ({ ...prev, [label]: "" }));
  };

  const validateForm = () => {
    const temp = {};
    const fields = formFields[activeTab] || [];

    fields.forEach((item) => {
      if (item.required) {
        const val = formData[item.label];
        if (val === undefined || val === null || String(val).trim() === "") {
          temp[item.label] = "Please fill the mandatory field";
        }
      }
    });

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const buildWhatsAppMessage = () => {
    const lines = [`*New Enquiry From:* ${activeTab}`, ""];

    // preserve field order
    (formFields[activeTab] || []).forEach((field) => {
      const key = field.label;
      const value = formData[key];
      // Only include filled fields
      if (
        value !== undefined &&
        value !== null &&
        String(value).trim() !== ""
      ) {
        lines.push(`*${key}:* ${value}`);
      }
    });

    // timestamp (optional, helps tracking)
    const ts = new Date().toLocaleString();
    lines.push("", `*Time:* ${ts}`);

    return encodeURIComponent(lines.join("\n"));
  };

  const submitForm = () => {
    if (!validateForm()) return;

    const finalMessage = buildWhatsAppMessage();
    // open WhatsApp chat in new tab (web)
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${finalMessage}`,
      "_blank"
    );

    // show success popup & clear form
    setShowSuccess(true);
    setFormData({});
    setErrors({});
  };

  // Helper to render input/select
  const renderField = (item) => {
    const value = formData[item.label] || "";

    if (item.type === "select") {
      return (
        <select
          value={value}
          onChange={(e) => handleInput(item.label, e.target.value)}
          className={`w-full px-3 py-2 mt-1 rounded-lg border text-black ${
            errors[item.label] ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-black outline-none`}
        >
          <option value="">
            {item.required ? "Select (required)" : "Select (optional)"}
          </option>
          {item.options.map((op, i) => (
            <option key={i} value={op}>
              {op}
            </option>
          ))}
        </select>
      );
    }

    return (
      <input
        type={item.type}
        placeholder={item.placeholder || ""}
        value={value}
        onChange={(e) => handleInput(item.label, e.target.value)}
        className={`w-full px-3 py-2 mt-1 rounded-lg border text-black ${
          errors[item.label] ? "border-red-500" : "border-gray-300"
        } focus:ring-2 focus:ring-black outline-none`}
      />
    );
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      ></div>

      {/* Popup card */}
      <div
        className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2
        bg-white w-[95%] max-w-3xl p-6 rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-xl font-bold text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-center text-2xl font-bold mb-2 text-black">
          <span className="bg-clip-text text-transparent bg-gradient-to-r
           from-[#2563eb] to-[#c9a759]">
            BulkBridge
          </span>{" "}
          – Reebok School Shoe Institutional Enquiry
        </h2>
        <h3 className="text-center text-xl font-semibold mb-2 text-gray-700">
          Get Institutional Pricing for Reebok School Shoes
        </h3>
        <p className="text-center text-gray-600 mb-4">
          Get bulk pricing & size sets. Choose your role to continue.
        </p>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setFormData({});
                setErrors({});
              }}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                activeTab === tab
                  ? "bg-black text-white shadow-md scale-105"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Form grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(formFields[activeTab] || []).map((item, idx) => (
            <div key={idx}>
              <label className="text-sm font-medium text-gray-600">
                {item.label}
                {item.required && <span className="text-red-500 ml-1">*</span>}
              </label>

              {renderField(item)}

              {errors[item.label] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[item.label]}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Submit */}
        <button
          onClick={submitForm}
          className="mt-6 w-full py-3 bg-green-600 text-white rounded-xl text-lg font-semibold shadow-lg hover:bg-green-700"
        >
          Submit via WhatsApp
        </button>
        {/* Privacy disclaimer (STEP 7) */}
        <div className="mt-4 text-xs text-gray-500 leading-relaxed text-center">
          <p className="font-semibold">Privacy Disclaimer:</p>
          <p>Your information is safe with BulkBridge.</p>
          <p>We contact you only for school shoe enquiries.</p>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 z-[60] flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-sm w-full animate-fadeIn">
            <h2 className="text-xl font-bold text-green-700">Thank you!</h2>

            <p className="text-gray-700 mt-3 leading-relaxed">
              Your enquiry has been received.
              <br />
              Our BulkBridge team will contact you within 24 Hours to share your
              institutional Reebok pricing, size set details, and next steps.
            </p>

            <button
              onClick={() => setShowSuccess(false)}
              className="mt-5 px-6 py-2 bg-black text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ParentPopupForm;
