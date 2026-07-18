// Wayne County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-17

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

export const AUDITOR_VENDOR = "Data Dynamics (DDTI)";

export const LINKS = [
  // ---------- Government ----------
  { name: "Wayne County (Official Site)", category: "Government", subcategory: "County", url: "https://www.wayneohio.org/", description: "Official Wayne County government website — offices, departments, and services." },
  { name: "County Auditor", category: "Government", subcategory: "County", url: "https://waynecountyauditor.org/", description: "Property values, tax records, real-estate search, and county finances." },
  { name: "Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.boe.ohio.gov/wayne/", description: "Voter registration, ballots, polling places, and election results." },
  { name: "City of Wooster", category: "Government", subcategory: "Municipal", url: "https://www.woosteroh.com/", description: "Official site of Wooster, the county seat." },

  // ---------- Education ----------
  { name: "Wayne County Public Library", category: "Education", subcategory: "Library", url: "https://www.wcpl.info/", description: "County library system — books, e-resources, and programs." },
  { name: "The College of Wooster", category: "Education", subcategory: "College", url: "https://www.wooster.edu/", description: "Private liberal-arts college in Wooster." },
  { name: "University of Akron Wayne College", category: "Education", subcategory: "College", url: "https://wayne.uakron.edu/", description: "Regional University of Akron campus in Orrville." },

  // ---------- Health ----------
  { name: "Wooster Community Hospital", category: "Health", subcategory: "Hospital", url: "https://www.woosterhospital.org/", description: "The county's full-service community hospital." },
  { name: "Wayne County Health Department", category: "Health", subcategory: "Public Health", url: "https://www.wayne-health.org/", description: "Public-health services, clinics, vital records, and programs." },

  // ---------- Business & Economy ----------
  { name: "Wooster Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.woosterchamber.com/", description: "Local business network, member directory, and events." },

  // ---------- Recreation & Tourism ----------
  { name: "Visit Wayne County", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://www.visitwaynecountyohio.com/", description: "Wayne County Convention & Visitors Bureau — Ohio's Amish Country travel guide." },

  // ---------- News & Media ----------
  { name: "The Daily Record", category: "News & Media", subcategory: "Newspaper", url: "https://www.the-daily-record.com/", description: "Daily newspaper covering Wooster and Wayne County." },
];
