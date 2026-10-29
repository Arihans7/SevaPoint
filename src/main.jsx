import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BadgeCheck, BriefcaseBusiness,
  Calculator, Camera, CheckCircle2, ChevronDown, Clock3, FileCheck2, FileImage,
  FileText, GraduationCap, Landmark, MapPin, Menu, MessageCircle, Printer,
  ScanLine, Search, ShieldCheck, Sparkles, Stamp, UserRound, X, Zap
} from 'lucide-react';
import './styles.css';

const services = [
  { icon: FileText, title: 'Government Forms', text: 'Certificates, schemes and online government applications.', tag: 'Applications' },
  { icon: BriefcaseBusiness, title: 'Jobs & Exams', text: 'SSC, Railway, Banking, MPSC, UPSC and competitive exam forms.', tag: 'Recruitment' },
  { icon: BadgeCheck, title: 'PAN Services', text: 'New PAN applications, corrections and document guidance.', tag: 'Identity' },
  { icon: FileCheck2, title: 'Passport Assistance', text: 'Online application guidance and document preparation support.', tag: 'Documentation' },
  { icon: GraduationCap, title: 'Education', text: 'Scholarships, admissions, exam forms and student services.', tag: 'Students' },
  { icon: Landmark, title: 'Certificates', text: 'Income, domicile, caste, NCL and other certificate assistance.', tag: 'Certificates' },
  { icon: Printer, title: 'Print & Scan', text: 'Printing, scanning, photocopying, lamination and digital copies.', tag: 'In-store' },
  { icon: Camera, title: 'Photo & PDF Tools', text: 'Passport photos, signature resizing, image-to-PDF and PDF work.', tag: 'Documents' },
];
const tools = [
  { icon: ScanLine, title: 'Image Resizer', text: 'Prepare photos and signatures for online forms.', action: 'Try tool', key: 'resize' },
  { icon: FileImage, title: 'Image to PDF', text: 'Combine image files into a shareable PDF.', action: 'Try tool', key: 'pdf' },
 { icon: FileText, title: 'Typing Test', text: 'Practise English and Marathi typing and improve your speed.', action: 'Start typing test', key: 'typing' },
  { icon: Calculator, title: 'Calculators', text: 'Quick age, GST and everyday calculations.', action: 'Open tools', key: 'calc' },
];
const notices = [
  { title: 'IBPS RRB Recruitment 2026', type: 'Recruitment', date: '27 Sep 2026', posts: 'Demo listing', status: 'Verify notice' },
  { title: 'Bank of Baroda Recruitment 2026', type: 'Banking', date: '01 Oct 2026', posts: 'Demo listing', status: 'Verify notice' },
  { title: 'SSC CHSL Recruitment 2026', type: 'Examination', date: '07 Oct 2026', posts: 'Demo listing', status: 'Verify notice' },
  { title: 'RRB Paramedical Recruitment 2026', type: 'Recruitment', date: '14 Oct 2026', posts: 'Demo listing', status: 'Verify notice' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeTool, setActiveTool] = useState(null);
  const [noticeFilter, setNoticeFilter] = useState('All updates');
  const [formSent, setFormSent] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imageWidth, setImageWidth] = useState('300');
  const [imageHeight, setImageHeight] = useState('300');
  const [calcAmount, setCalcAmount] = useState('1000');
  const [calcRate, setCalcRate] = useState('18');
  const [calcYears, setCalcYears] = useState('2');
  const filteredServices = services.filter(s => `${s.title} ${s.text}`.toLowerCase().includes(query.toLowerCase()));
  const filteredNotices = notices.filter(n => noticeFilter === 'All updates' || n.type === noticeFilter);

  const openTool = (key) => {
  if (key === 'typing') {
    window.open(
      'https://www.typingbuddy.com/',
      '_blank',
      'noopener,noreferrer'
    );
    return;
  }

  setActiveTool(key);
};
  const closeModal = () => { setActiveTool(null); setImageFile(null); };

  return (
    <div className="site-shell">
      <div className="top-strip">
        <div className="container top-inner"><span><span className="live-dot" /> Your neighbourhood digital service desk</span><span className="top-hours"><Clock3 size={13}/> Mon–Sat · 9:00 AM–8:00 PM <span className="top-sep">|</span> Sunday by appointment</span></div>
      </div>
      <header className="header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" aria-label="SevaPoint home"><span className="brand-mark"><Sparkles size={20}/></span><span>Seva<span>Point</span><small> DIGITAL SERVICE CENTRE</small></span></a>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#updates" onClick={() => setMenuOpen(false)}>Jobs & Forms</a>
            <a href="#tools" onClick={() => setMenuOpen(false)}>Digital Tools</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <a className="button button-dark nav-cta" href="#contact">Talk to us <ArrowUpRight size={16}/></a>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-icon"><Zap size={14}/></span> Fast, friendly & local digital assistance</div>
              <h1>Your online work,<br/><span>made simpler.</span></h1>
              <p className="hero-lead">From government forms to document services, get practical help with everyday digital work — all in one convenient place.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#services">Explore services <ArrowRight size={17}/></a>
                <a className="button button-outline" href="#contact"><MessageCircle size={16}/> Contact the centre</a>
              </div>
              <div className="trust-row">
                <div className="trust-icon"><ShieldCheck size={18}/></div>
                <div><strong>Guidance you can count on</strong><span>Clear steps. Document support. Local assistance.</span></div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="service-desk">
                <div className="desk-heading">
                  <div><span className="desk-kicker">SEVAPOINT SERVICE DESK</span><h3>What can we help<br/>you with today?</h3></div>
                  <div className="desk-mark"><FileCheck2 size={22}/></div>
                </div>
                <div className="desk-search"><Search size={16}/><span>Find a service or application</span></div>
                <div className="desk-list">
                  <a href="#services" className="desk-row"><span className="desk-row-icon"><FileText size={17}/></span><span><strong>Government applications</strong><small>Forms, schemes & certificates</small></span><ArrowUpRight size={16}/></a>
                  <a href="#updates" className="desk-row"><span className="desk-row-icon amber"><BriefcaseBusiness size={17}/></span><span><strong>Jobs & examination forms</strong><small>Recruitment and application support</small></span><ArrowUpRight size={16}/></a>
                  <a href="#services" className="desk-row"><span className="desk-row-icon blue"><ScanLine size={17}/></span><span><strong>Document services</strong><small>Print, scan, photo & PDF</small></span><ArrowUpRight size={16}/></a>
                </div>
                <div className="desk-footer"><span className="desk-live"></span><span>Local assistance, in person</span><span className="desk-hours"><Clock3 size={13}/> Mon–Sat</span></div>
              </div>
              <div className="hero-note"><span className="note-star"><ShieldCheck size={19}/></span><div><strong>Clear help, without the guesswork.</strong><span>Confirm requirements before you apply.</span></div></div>
            </div>
          </div>
          <div className="container hero-bottom"><span>ASSISTANCE FOR</span><div>Individuals <i/> Students <i/> Job seekers <i/> Families <i/> Local businesses</div><a href="#services">Find your service <ArrowRight size={14}/></a></div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading heading-row"><div><div className="eyebrow">WHAT WE CAN HELP WITH</div><h2>Services for your<br className="desktop-break"/> everyday needs.</h2></div><div className="heading-side"><p>Find the assistance you need, without the confusion. Choose a service to learn more or ask us what to prepare.</p><a className="text-link" href="#contact">Ask about a service <ArrowRight size={16}/></a></div></div>
            <div className="service-controls"><div className="search-box"><Search size={17}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search services..." aria-label="Search services"/></div><span>{filteredServices.length} services available</span></div>
            <div className="service-grid">
              {filteredServices.map((s, i) => { const Icon = s.icon; return <article className="service-card" key={s.title}><div className={`service-icon icon-${i%4}`}><Icon size={22}/></div><div className="service-tag">{s.tag}</div><h3>{s.title}</h3><p>{s.text}</p><a href="#contact" className="card-link">Enquire about this <ArrowUpRight size={15}/></a></article>; })}
            </div>
            {filteredServices.length === 0 && <div className="empty-state">No services match that search. Try a different keyword.</div>}
            <div className="service-footnote"><ShieldCheck size={16}/><span>Services and eligibility depend on the relevant department. We provide assistance, not government approval or guaranteed outcomes.</span></div>
          </div>
        </section>

        <section className="updates-section section" id="updates">
          <div className="container updates-layout">
            <div className="updates-main">
              <div className="eyebrow">STAY INFORMED</div><h2>Latest jobs &<br/>form updates.</h2>
              <p className="section-intro">A convenient place to keep an eye on recruitment, exams and application notices. Always confirm dates on the official website before applying.</p>
              <div className="filter-row">{['All updates','Recruitment','Banking','Examination'].map(f => <button key={f} onClick={() => setNoticeFilter(f)} className={noticeFilter === f ? 'filter-chip active' : 'filter-chip'}>{f}</button>)}</div>
              <div className="notice-list">{filteredNotices.map((n, i) => <article className="notice-item" key={n.title}><div className="notice-number">0{i+1}</div><div className="notice-info"><span>{n.type}</span><h3>{n.title}</h3><p>{n.posts} · Demonstration content</p></div><div className="notice-date"><span>{n.date}</span><small>{n.status}</small></div><a className="notice-arrow" href="#contact" aria-label={`Ask about ${n.title}`}><ArrowUpRight size={19}/></a></article>)}</div>
              <div className="notice-disclaimer"><span>!</span> Demo listings only — dates, vacancies and links must be verified from official notifications before publication.</div>
            </div>
            <aside className="updates-aside">
              <div className="aside-art"><div className="calendar-page"><div className="calendar-head"></div><div className="calendar-ring ring-left"></div><div className="calendar-ring ring-right"></div><div className="calendar-grid">{Array.from({length:21},(_,i)=><i key={i} className={i===10?'marked':''}/>)}</div></div><div className="aside-star">✳</div><div className="aside-orbit"></div></div>
              <div className="aside-content"><div className="eyebrow">NEED A HAND?</div><h3>Not sure where<br/>to begin?</h3><p>Tell us what you’re applying for. We’ll help you understand the next steps and documents to check.</p><a className="button button-dark" href="#contact">Get application help <ArrowRight size={16}/></a><div className="aside-small"><ShieldCheck size={15}/> Verify important details with official sources.</div></div>
            </aside>
          </div>
        </section>

        <section className="section tools-section" id="tools">
          <div className="container">
            <div className="section-heading heading-row"><div><div className="eyebrow">USEFUL, EVERYDAY UTILITIES</div><h2>Small tools. Less hassle.</h2></div><div className="heading-side"><p>Quick utilities for common document and digital tasks. Some tools are available in this demo; others are marked as coming soon.</p></div></div>
            <div className="tools-grid">{tools.map((t,i)=>{const Icon=t.icon;return <article className="tool-card" key={t.key}><div className={`tool-icon tool-${i}`}><Icon size={22}/></div><div className="tool-number">0{i+1}</div><h3>{t.title}</h3><p>{t.text}</p><button className="text-link" onClick={()=>openTool(t.key)}>{t.action} <ArrowUpRight size={15}/></button></article>})}</div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container process-layout">
            <div className="process-intro"><div className="eyebrow">A SIMPLE PROCESS</div><h2>One step at<br/>a time.</h2><p>We make the process feel more manageable by helping you understand what comes next.</p><a className="text-link" href="#contact">Speak with our team <ArrowRight size={16}/></a></div>
            <div className="process-steps">
              <article className="process-step"><span>01</span><div><h3>Choose a service</h3><p>Tell us which form, document or digital task you need help with.</p></div><FileText size={21}/></article>
              <article className="process-step"><span>02</span><div><h3>Confirm requirements</h3><p>Check eligibility, fees, deadlines and the documents required.</p></div><MessageCircle size={21}/></article>
              <article className="process-step"><span>03</span><div><h3>Prepare your documents</h3><p>Bring the relevant documents using the process agreed with the centre.</p></div><ScanLine size={21}/></article>
              <article className="process-step"><span>04</span><div><h3>Get assistance</h3><p>Receive support with the agreed application or digital service.</p></div><CheckCircle2 size={21}/></article>
            </div>
          </div>
        </section>

      ```jsx
<section className="section about-band" id="about">
  <div className="container">
    <div className="about-inner">
      <div className="about-symbol">
        <Sparkles size={30} />
      </div>

      <div>
        <div className="eyebrow">LOCAL SUPPORT, HUMAN APPROACH</div>
        <h2>
          Digital services should feel
          <br />
          a little less complicated.
        </h2>
      </div>

      <p>
        SevaPoint is your local destination for online applications,
        document services and everyday digital assistance. Visit our
        centre in Amravati and let us help you with your digital needs.
      </p>
    </div>

    {/* Store Location */}
    <div className="about-location">
      <div className="about-location-copy">
        <div className="eyebrow">VISIT OUR STORE</div>

        <h3>Find us in Amravati.</h3>

        <p className="location-address">
          <MapPin size={19} />
          <span>
            Shop No. 1, Gulshan Point,
            Rajapeth, Madhokar Peth,
            Amravati, Maharashtra – 444605
          </span>
        </p>

        <p className="location-description">
          Visit SevaPoint Digital Service Centre for assistance with
          online applications, government forms and document services.
        </p>

        <a
          className="button button-dark location-directions"
          href="https://maps.app.goo.gl/t2mykrakkvPhw8Ad7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Directions <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="about-map">
        <iframe
          title="SevaPoint Digital Service Centre location in Amravati"
          src="https://maps.google.com/maps?q=Shop%20No.%201%2C%20Gulshan%20Point%2C%20Rajapeth%2C%20Madhokar%20Peth%2C%20Amravati%2C%20Maharashtra%20444605&t=&z=16&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  </div>
</section>
```

      </main>

      <footer className="footer"><div className="container"><div className="footer-main"><div className="footer-brand"><a className="brand brand-footer" href="#home"><span className="brand-mark"><Sparkles size={20}/></span><span>Seva<span>Point</span><small> DIGITAL SERVICE CENTRE</small></span></a><p>Your local starting point for online applications, document services and everyday digital work.</p><div className="footer-pill"><span/> Local service. Clear guidance.</div></div><div className="footer-links"><h4>EXPLORE</h4><a href="#services">Services</a><a href="#updates">Jobs & Forms</a><a href="#tools">Digital Tools</a><a href="#about">About us</a></div><div className="footer-links"><h4>GET IN TOUCH</h4><a href="#contact">Contact the centre</a><a href="#contact">Opening hours</a><a href="#contact">Get directions</a><a href="#contact">Send an enquiry</a></div><div className="footer-contact"><h4>VISIT OR CALL</h4><p><MapPin size={15}/> [Add shop address]</p><p><MessageCircle size={15}/> [Add phone / WhatsApp]</p><p><Clock3 size={15}/> Mon–Sat · 9 AM–8 PM</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} SevaPoint Digital Service Centre. All rights reserved.</span><span>Privacy policy · Terms <i/> Built to make digital tasks simpler.</span></div></div></footer>

      {activeTool && <div className="modal-backdrop" role="presentation" onClick={closeModal}><div className="tool-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={closeModal} aria-label="Close tool"><X size={20}/></button>
        {activeTool==='resize' && <><div className="modal-icon"><ScanLine size={22}/></div><div className="eyebrow">DIGITAL TOOL</div><h2 id="modal-title">Image resizer</h2><p>Resize an image in your browser. Choose dimensions and download the resized copy.</p><label className="upload-zone"><FileImage size={25}/><strong>{imageFile?.name || 'Choose an image'}</strong><span>PNG, JPG or WEBP</span><input type="file" accept="image/*" onChange={e=>setImageFile(e.target.files?.[0]||null)}/></label><div className="dimension-row"><label>Width (px)<input type="number" min="1" max="5000" value={imageWidth} onChange={e=>setImageWidth(e.target.value)}/></label><label>Height (px)<input type="number" min="1" max="5000" value={imageHeight} onChange={e=>setImageHeight(e.target.value)}/></label></div><button className="button button-primary full-button" disabled={!imageFile} onClick={()=>resizeAndDownload(imageFile,imageWidth,imageHeight)}>Resize & download <ArrowRight size={16}/></button></>}
        {activeTool==='pdf' && <><div className="modal-icon"><FileImage size={22}/></div><div className="eyebrow">DIGITAL TOOL</div><h2 id="modal-title">Image to PDF</h2><p>Select image files to create a PDF in your browser. Your selected images are not uploaded to a server.</p><label className="upload-zone"><FileImage size={25}/><strong>{imageFile?.name || 'Choose an image'}</strong><span>Choose a JPG or PNG image</span><input type="file" accept="image/*" onChange={e=>setImageFile(e.target.files?.[0]||null)}/></label><button className="button button-primary full-button" disabled={!imageFile} onClick={()=>imageToPdf(imageFile)}>Create PDF <ArrowRight size={16}/></button><p className="form-note">This lightweight demo supports one image per PDF. Multi-page support can be added later.</p></>}
        {activeTool==='calc' && <><div className="modal-icon"><Calculator size={22}/></div><div className="eyebrow">DIGITAL TOOL</div><h2 id="modal-title">GST calculator</h2><p>Estimate GST on an amount. Confirm the applicable rate for your transaction.</p><div className="dimension-row"><label>Amount (₹)<input type="number" min="0" value={calcAmount} onChange={e=>setCalcAmount(e.target.value)}/></label><label>GST rate<select value={calcRate} onChange={e=>setCalcRate(e.target.value)}><option value="5">5%</option><option value="12">12%</option><option value="18">18%</option><option value="28">28%</option></select></label></div><div className="calc-result"><span>GST amount</span><strong>₹{(Math.max(0,Number(calcAmount)||0)*(Number(calcRate)||0)/100).toFixed(2)}</strong><span>Total with GST</span><strong>₹{(Math.max(0,Number(calcAmount)||0)*(1+(Number(calcRate)||0)/100)).toFixed(2)}</strong></div></>}
        {activeTool==='typing' && <><div className="modal-icon"><FileText size={22}/></div><div className="eyebrow">COMING SOON</div><h2 id="modal-title">Typing practice</h2><p>Marathi and English typing practice is planned for a future update. For now, contact the centre to ask about available typing services.</p><a className="button button-primary full-button" href="#contact" onClick={closeModal}>Ask the centre <ArrowRight size={16}/></a></>}
      </div></div>}
    </div>
  );
}

function resizeAndDownload(file,w,h) {
  if(!file || !(Number(w)>0) || !(Number(h)>0)) return;
  const url=URL.createObjectURL(file), img=new Image();
  img.onload=()=>{const c=document.createElement('canvas');c.width=Number(w);c.height=Number(h);const ctx=c.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,c.width,c.height);ctx.drawImage(img,0,0,c.width,c.height);c.toBlob(blob=>{if(blob){const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='sevapoint-resized.png';a.click();URL.revokeObjectURL(a.href);}URL.revokeObjectURL(url);},'image/png');};
  img.onerror=()=>URL.revokeObjectURL(url);img.src=url;
}
function imageToPdf(file) {
  if(!file) return;
  const url=URL.createObjectURL(file), img=new Image();
  img.onload=()=>{const ratio=img.width/img.height;const pageW=595.28,pageH=841.89;let w=pageW-72,h=w/ratio;if(h>pageH-72){h=pageH-72;w=h*ratio;}const x=(pageW-w)/2,y=(pageH-h)/2;const canvas=document.createElement('canvas');canvas.width=img.width;canvas.height=img.height;canvas.getContext('2d').drawImage(img,0,0);const jpeg=canvas.toDataURL('image/jpeg',0.92).split(',')[1];const bytes=Uint8Array.from(atob(jpeg),c=>c.charCodeAt(0));const pdf=makePdf(bytes,img.width,img.height,pageW,pageH,x,y,w,h);const blob=new Blob([pdf],{type:'application/pdf'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='sevapoint-image.pdf';a.click();URL.revokeObjectURL(a.href);URL.revokeObjectURL(url);};
  img.onerror=()=>URL.revokeObjectURL(url);img.src=url;
}
function makePdf(jpeg,imgW,imgH,pageW,pageH,x,y,w,h){
  const enc=s=>new TextEncoder().encode(s), chunks=[], offsets=[];let length=0;
  const add=b=>{chunks.push(b);length+=b.length;};const obj=(n,body)=>{offsets[n]=length;add(enc(`${n} 0 obj\n${body}\nendobj\n`));};
  add(enc('%PDF-1.4\n'));
  obj(1,'<< /Type /Catalog /Pages 2 0 R >>');obj(2,'<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
  obj(3,'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 '+pageW+' '+pageH+'] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>');
  offsets[4]=length;add(enc(`4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${imgW} /Height ${imgH} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpeg.length} >>\nstream\n`));add(jpeg);add(enc('\nendstream\nendobj\n'));
  const stream=`q ${w} 0 0 ${h} ${x} ${y} cm /Im0 Do Q`;obj(5,`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
  const xref=length;add(enc('xref\n0 6\n0000000000 65535 f \n'));for(let i=1;i<=5;i++)add(enc(String(offsets[i]).padStart(10,'0')+' 00000 n \n'));add(enc(`trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`));
  return new Blob(chunks);
}

createRoot(document.getElementById('root')).render(<App/>);