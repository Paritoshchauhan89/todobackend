import Contact from '../models/contactModel.js';

// Get all contacts
export const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single contact by ID
export const getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (contact) {
            res.json(contact);
        } else {
            res.status(404).json({ message: 'Contact not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new contact
export const createContact = async (req, res) => {
    const contact = new Contact(req.body);
    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a contact
export const updateContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (contact) {
            contact.set(req.body);
            const updatedContact = await contact.save();
            res.json(updatedContact);
        } else {
            res.status(404).json({ message: 'Contact not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a contact
export const deleteContact = async (req, res) => {
    try {
        const deletedContact = await Contact.deleteOne({ _id: req.params.id });
        if (deletedContact.deletedCount > 0) {
            res.json({ message: 'Contact deleted' });
        } else {
            res.status(404).json({ message: 'Contact not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
