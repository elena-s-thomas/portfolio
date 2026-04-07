export interface Lesson {
  id: number;
  title: string;
  subtitle: string;
  explanation: string[];
  keyTerms: { term: string; definition: string }[];
  diagramKey: string;
  knowledgeCheck: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "How a Study Gets Into PACS",
    subtitle: "From image acquisition to archive",
    explanation: [
      "When a technologist acquires images on a modality (CT, MRI, X-ray), those images are transmitted digitally using the DICOM standard. The modality acts as a DICOM SCU (Service Class User) — the device initiating the communication. The PACS Server acts as a DICOM SCP (Service Class Provider) — the device that receives and stores the images.",
      "Each study is uniquely identified in DICOM by Study, Series, and Instance UIDs. The modality sends a C-STORE request to the PACS SCP, which acknowledges receipt and archives the images. This entire process typically takes seconds to minutes depending on image volume and network speed.",
      "For a PACS Administrator or Application Specialist, understanding this flow is foundational — when images don't arrive, every troubleshooting path starts here.",
    ],
    keyTerms: [
      { term: "DICOM", definition: "Digital Imaging and Communications in Medicine — the standard for medical image transmission" },
      { term: "SCU", definition: "Service Class User — the device initiating a DICOM communication (e.g., modality)" },
      { term: "SCP", definition: "Service Class Provider — the device receiving a DICOM communication (e.g., PACS server)" },
      { term: "C-STORE", definition: "DICOM command to store (send) image data to a destination" },
      { term: "AE Title", definition: "Application Entity Title — the network identifier for a DICOM device" },
      { term: "Study/Series/Instance UID", definition: "Unique identifiers that distinguish studies, series, and individual images in DICOM" },
    ],
    diagramKey: "dicom-flow",
    knowledgeCheck: {
      question: "Which DICOM entity is responsible for receiving images from the modality?",
      options: ["SCU (Service Class User)", "SCP (Service Class Provider)", "MWL (Modality Worklist)", "PACS Archive"],
      correctIndex: 1,
      explanation: "The SCP (Service Class Provider) is the receiving end — in this case, the PACS server. The SCU (Service Class User) is the sender, typically the modality. Think of it as: the SCU calls, the SCP answers.",
    },
  },
  {
    id: 2,
    title: "Understanding the Worklist",
    subtitle: "Connecting orders to the modality",
    explanation: [
      "Before a technologist scans a patient, the modality needs to know who the patient is and what procedure is scheduled. This information travels from the hospital information system (HIS) via HL7 ORM messages to the Radiology Information System (RIS). The RIS then exposes this as a DICOM Modality Worklist that the modality queries before each exam.",
      "When the technologist selects a patient from the worklist, the demographic and order data auto-populate — eliminating manual entry errors that would cause patient mismatches in PACS. The Accession Number is the key linking field that ties the DICOM study back to the original order.",
      "A broken worklist connection is one of the most common real-world PACS issues — studies arrive with 'UNKNOWN PATIENT' or with transcription errors.",
    ],
    keyTerms: [
      { term: "Modality Worklist (MWL)", definition: "DICOM service that provides scheduled procedures to the modality from the RIS" },
      { term: "HL7 ORM message", definition: "Health Level Seven Order Message — sends orders from HIS to RIS" },
      { term: "Accession Number", definition: "The unique identifier linking a DICOM study to the original order" },
      { term: "Scheduled Procedure Step", definition: "The planned imaging procedure in the RIS/MWL" },
      { term: "RIS", definition: "Radiology Information System — manages orders, worklists, and reports" },
      { term: "HIS", definition: "Hospital Information System — master patient and order source system" },
    ],
    diagramKey: "worklist-diagram",
    knowledgeCheck: {
      question: "What standard is used to send the order from the HIS to the RIS?",
      options: ["DICOM C-STORE", "HL7 ORM message", "FHIR R4", "Accession Number"],
      correctIndex: 1,
      explanation: "HL7 (Health Level Seven) is the messaging standard used between hospital systems like HIS and RIS. DICOM is used for imaging data, while HL7 handles clinical orders, ADT, and results.",
    },
  },
  {
    id: 3,
    title: "Study Routing Rules",
    subtitle: "Directing studies to the right reading queue",
    explanation: [
      "Once a study is archived in PACS, routing rules determine which reading worklists it appears on. Rules are configured by an Application Specialist or PACS Administrator and typically evaluate: modality type (CT, MR, US, etc.), body part examined, ordering department, referring physician, patient location, and time of day.",
      "A CT Head study from the Emergency Department might route to the Neuro reading list AND the ED overnight queue simultaneously. Studies can route to multiple destinations. Auto-routing also includes pre-fetch rules — automatically pulling prior studies from long-term archive when a new exam of the same type arrives.",
      "This is where Application Specialist expertise matters: configuring routing incorrectly means radiologists miss studies or see the wrong queue, directly impacting patient care turnaround times.",
    ],
    keyTerms: [
      { term: "Auto-routing", definition: "Automatic distribution of studies to reading worklists based on configured rules" },
      { term: "Pre-fetch", definition: "Automatically retrieving and displaying prior studies alongside new exams" },
      { term: "Routing rules", definition: "Conditional logic that determines which worklists a study appears on" },
      { term: "Destination AE Title", definition: "The target DICOM device or system where a study is routed" },
      { term: "Reading worklist", definition: "A queue of studies assigned to a radiologist for interpretation" },
      { term: "Body part examined", definition: "The anatomical region of interest in a study — used as a routing criterion" },
    ],
    diagramKey: "routing-flowchart",
    knowledgeCheck: {
      question: "A new CT Head study arrives from the Emergency Department. Based on typical routing rules, which worklists would it likely appear on?",
      options: ["Neuro reading list only", "ED overnight queue only", "Both Neuro reading list AND ED overnight queue", "General archive only — no worklist routing"],
      correctIndex: 2,
      explanation: "Studies can match multiple routing rules simultaneously, causing them to appear on multiple worklists. A CT Head from the ED typically triggers both specialty (Neuro) and departmental (ED) routing rules.",
    },
  },
  {
    id: 4,
    title: "Troubleshooting Common Issues",
    subtitle: "Diagnosing what goes wrong in the imaging chain",
    explanation: [
      "The most frequent issue reported to an Application Specialist: 'A study I sent isn't in PACS.' The diagnostic workflow always starts at the source — did the modality complete the send? Check the modality's DICOM send log for success/failure status. If the send was logged as successful, check the PACS communication logs to see if the SCP received the C-STORE.",
      "If received, check archive status — did it pass validation? DICOM conformance issues (mismatched Transfer Syntaxes, malformed headers) can cause silent failures. Patient matching errors are another common class: if the demographic data on the study doesn't match an existing patient in PACS, the system may create a duplicate or reject the study.",
      "In production environments, PACS Administrators configure patient reconciliation rules to handle these cases automatically. When manual intervention is needed, study merge and split tools are used.",
    ],
    keyTerms: [
      { term: "Patient reconciliation", definition: "Process of matching incoming study demographics to existing patient records" },
      { term: "Study merge/split", definition: "Manual tools for combining or separating studies that were incorrectly grouped" },
      { term: "DICOM conformance", definition: "Adherence to DICOM standard rules — mismatches can cause transmission failures" },
      { term: "Communication logs", definition: "System records of DICOM send/receive transactions between devices" },
      { term: "Transfer Syntax", definition: "The encoding and compression method used for DICOM image data" },
      { term: "C-STORE failure", definition: "When a DICOM store command is rejected or not acknowledged" },
    ],
    diagramKey: "troubleshooting",
    knowledgeCheck: {
      question: "A technologist reports that a study they sent is not appearing in PACS. What is the first thing you would check?",
      options: ["The PACS archive capacity", "The modality's DICOM send log for success/failure status", "The radiologist's reading worklist", "The HL7 ORM message from the HIS"],
      correctIndex: 1,
      explanation: "Always start at the source. If the modality's send log shows success, move to the PACS communication logs. Troubleshooting should follow the data path in sequence: modality → network → PACS SCP → archive → worklist.",
    },
  },
  {
    id: 5,
    title: "Workflow Optimization",
    subtitle: "Configuring PACS to match how clinicians actually work",
    explanation: [
      "The final phase of any PACS implementation — and the ongoing job of an Application Specialist — is workflow optimization. After go-live, the team analyzes turnaround times, radiologist feedback, and worklist behavior to identify bottlenecks.",
      "Common optimizations include: configuring hanging protocols so images auto-arrange in each radiologist's preferred layout; setting up reading worklist priority rules so urgent studies surface automatically; tuning pre-fetch settings to ensure priors load before the radiologist opens the study; and personalizing user preferences for window/level defaults, measurement tools, and annotation settings.",
      "A well-optimized PACS workflow can reduce the time a radiologist spends on non-diagnostic tasks by 30-40%, directly improving report turnaround time. Application Specialists who can quantify this impact — and configure it — are highly valued.",
    ],
    keyTerms: [
      { term: "Hanging protocols", definition: "Rules that auto-arrange images on the reading workstation according to radiologist preference" },
      { term: "User preferences", definition: "Personalized settings for each radiologist (window/level, tools, layout, etc.)" },
      { term: "Reading worklist priority", definition: "Rules that surface urgent or high-priority studies first on the worklist" },
      { term: "Pre-fetch", definition: "Automatic retrieval of prior studies before the radiologist opens the current exam" },
      { term: "Turnaround time (TAT)", definition: "The elapsed time from image acquisition to final report delivery" },
      { term: "Window/level", definition: "DICOM image display settings that adjust brightness and contrast" },
    ],
    diagramKey: "workflow-comparison",
    knowledgeCheck: {
      question: "Which feature allows radiologists to have images automatically arranged in their preferred layout when opening a study?",
      options: ["Auto-routing rules", "HL7 ORM configuration", "Hanging protocols", "DICOM C-FIND"],
      correctIndex: 2,
      explanation: "Hanging protocols define how images are automatically arranged (hung) on the reading workstation when a study is opened — number of viewports, image series placement, comparison priors, etc. Configuring these is a key Application Specialist skill.",
    },
  },
];

export const completionData = {
  title: "Module Complete",
  message: "You've completed the PACS Radiology Study Routing & Worklist Management training module.",
  furtherReading: [
    { label: "IHE Radiology Profiles", url: "https://www.ihe.net/resources/technical_frameworks/#radiology" },
    { label: "DICOM Standard (PS3)", url: "https://www.dicomstandard.org/current" },
    { label: "ACR PACS Administrator Resources", url: "https://www.acr.org/Practice-Management-Quality-Informatics/Informatics/PACS-and-Radiology-Informatics" },
  ],
};

export default lessons;
