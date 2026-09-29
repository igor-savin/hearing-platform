"""Builds the two CHC take-home PDFs into public/assets/downloads/.
Usage: python3 _migration/genHearingBetterPdfs.py   (needs reportlab)"""
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import simpleSplit
D="/usr/share/fonts/truetype/dejavu/"
pdfmetrics.registerFont(TTFont("S",D+"DejaVuSans.ttf")); pdfmetrics.registerFont(TTFont("SB",D+"DejaVuSans-Bold.ttf"))
pdfmetrics.registerFont(TTFont("F",D+"DejaVuSerif-Bold.ttf"))
TEAL=HexColor("#155f6b"); AQUA=HexColor("#86d0d5"); INK=HexColor("#21424b"); MUTED=HexColor("#5c7178"); CREAM=HexColor("#fbf7ef")
W,H=letter; M=54
def build(path,title,intro,items,footer_note):
    c=canvas.Canvas(path,pagesize=letter); c.setTitle(title); c.setAuthor("California Hearing Center")
    state={"y":0,"n":0}
    def page():
        if state["n"]: footer(); c.showPage()
        state["n"]+=1
        c.setFillColor(CREAM); c.rect(0,0,W,H,fill=1,stroke=0)
        c.setFillColor(TEAL); c.rect(0,H-92,W,92,fill=1,stroke=0)
        c.setFillColor(HexColor("#ffffff")); c.setFont("F",23); c.drawString(M,H-52,title)
        c.setFillColor(AQUA); c.setFont("SB",10); c.drawString(M,H-74,"CALIFORNIA HEARING CENTER")
        state["y"]=H-122
    def footer():
        c.setFillColor(TEAL); c.setFont("SB",10)
        c.drawString(M,70,"San Mateo: 88 N. San Mateo Dr., San Mateo, CA 94401")
        c.drawString(M,56,"San Carlos: 1008 Laurel St., San Carlos, CA 94070")
        c.setFillColor(MUTED); c.setFont("S",10)
        c.drawString(M,40,"650-342-9449  ·  calhearing.com/hearing-better/  ·  "+footer_note)
    def para(text,font,size,color,lead,x=M,width=W-2*M):
        c.setFont(font,size); c.setFillColor(color)
        for ln in simpleSplit(text,font,size,width):
            if state["y"]<105: page(); c.setFont(font,size); c.setFillColor(color)
            c.drawString(x,state["y"],ln); state["y"]-=lead
    page()
    para(intro,"S",12.5,INK,18); state["y"]-=8
    for n,(head,body,link) in enumerate(items,1):
        need=40+18*(len(simpleSplit(body,"S",12,W-2*M-40))+ (1 if link else 0))
        if state["y"]-need<105: page()
        c.setFillColor(TEAL); c.circle(M+13,state["y"]+4,13,fill=1,stroke=0)
        c.setFillColor(HexColor("#ffffff")); c.setFont("SB",13); c.drawCentredString(M+13,state["y"]-0.5,str(n))
        para(head,"SB",14,TEAL,19,x=M+38,width=W-2*M-38)
        para(body,"S",11.5,INK,16.5,x=M+38,width=W-2*M-38)
        if link:
            c.setFillColor(TEAL); para(link,"SB",11,TEAL,16,x=M+38,width=W-2*M-38)
        state["y"]-=14
    footer(); c.save()
build("public/assets/downloads/chc-key-tips-and-technology-for-hearing-better.pdf","Key Tips & Technology for Hearing Better",
"No one hears perfectly all the time, even people with normal hearing. Hearing devices help a great deal, but they do not solve every communication problem. We find the best results come from knowing what else you can do. Please try at least two of these options.",
[("Communication skills: 5 Keys","Simple skills that help you hear better, especially in noisy places. Ask us for the handouts or the 5 Keys book.",None),
("Listening training: LACE AI Pro","Think of LACE as physical therapy for your brain. Auditory training strengthens how you process and understand sound. It helps you get the most from your hearing devices. Ask us how to get started.","neurotone.com/for-patients"),
("TV streamer or Auracast","A TV streamer plugs into your TV and sends the sound to your hearing devices. You hear the dialogue at your own volume. Others can keep the TV at a normal level. We can order the compatible streamer for most major brands. Auracast is a newer wireless standard that can stream from other sources too. Support depends on your devices.",None),
("Captioning glasses: Captify","Smart glasses that show live captions of speech in your view. Ask us if they may suit you. Prices and features change, so check the maker's site.","captify.glass"),
("Wireless microphones","A microphone such as Roger by Phonak is worn or placed near the speaker. It sends a clearer voice signal to your hearing device. It helps with noise, distance and echo.","phonak.com/en-us/hearing-devices/microphones")],
"Reviewed September 2026")
build("public/assets/downloads/chc-key-resources-for-hearing-better.pdf","Key Resources for Hearing Better",
"These groups and programs offer education, support and equipment for people with hearing loss and their families. Ask us if you want help choosing.",
[("Hearing Loss Association of America (HLAA)","A national community for education, connection and peer support. It serves children and adults. Local chapters meet around the country and in the Bay Area. Membership is free.","hearingloss.org"),
("Amplified and captioned telephones","California Connect is the state program that provides accessible phones, devices and services to eligible Californians who are hard of hearing or deaf, at no cost. CaptionCall and CapTel offer amplified phones with captions.","caconnect.org  ·  800-806-1191"),
("Living with Hearing Loss, by Shari Eberts","A blog by a hearing health advocate, author and speaker.","livingwithhearingloss.com"),
("Gael Hannan","A humorist, author and speaker who writes about life with hearing loss.","gaelhannan.com"),
("Association of Late Deafened Adults (ALDA)","A non-profit for support, advocacy and community for people who became deaf later in life.","alda.org"),
("American Tinnitus Association (ATA)","A non-profit that supports people with tinnitus through credible information, support and research.","ata.org")],
"Reviewed September 2026")
