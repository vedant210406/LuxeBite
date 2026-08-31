import Contact from '../models/Contact.js';

let mockContacts = [];

export const createContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    let contact;
    try {
      contact = await Contact.create({ name, email, subject, message });
    } catch (e) {
      contact = {
        _id: 'cnt_' + Date.now(),
        name,
        email,
        subject,
        message,
        status: 'unread',
        createdAt: new Date()
      };
      mockContacts.unshift(contact);
    }

    res.status(201).json({
      success: true,
      message: 'Thank you for reaching out to Grand Restaurant. We will respond promptly.',
      contact
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getContactMessages = async (req, res) => {
  try {
    let contacts = [];
    try {
      contacts = await Contact.find({}).sort({ createdAt: -1 });
    } catch (e) {
      contacts = mockContacts;
    }
    if (!contacts || contacts.length === 0) contacts = mockContacts;
    res.json(contacts);
  } catch (error) {
    res.json(mockContacts);
  }
};
