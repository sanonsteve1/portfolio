function doGet() {
  return ContentService.createTextOutput(JSON.stringify({ ok: true, service: "contact" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  if (!e || !e.postData || !e.postData.contents) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: "no-body" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  var data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: "bad-json" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  var name = String(data.name || "").trim();
  var email = String(data.email || "").trim();
  var message = String(data.message || "").trim();

  if (!name || !email || !message) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: "missing-fields" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  MailApp.sendEmail({
    to: "sanonsteve1@gmail.com",
    replyTo: email,
    subject: "Contact portfolio — " + name,
    body: message + "\n\n" + name + "\n" + email,
  });

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
