import Student from "../model/studentModel.js";

export const create = async (req, res) => {
    try {
        const studentData = new Student(req.body);
        const { email, RollNo } = studentData; 
        const studentExist = await Student.findOne({ $or: [{ email }, { RollNo }] });
        if (studentExist) {
            return res.status(400).json({ message: "Student already exists." });
        }
        const savedStudent = await studentData.save();
        res.status(200).json({ message: "Student created successfully", savedStudent });
    } catch (error) {
        res.status(500).json({ error: "Internal server error." });
    }
}


export const fetch = async (req, res) => {
    try {
        const students = await Student.find();
        if (students.length === 0) {
            return res.status(404).json({ message: "Student not found" })
        }
        res.status(200).json({ message: "All Students", students });
    } catch (error) {
        res.status(500).json({ error: "Internal server error." });
    }
};

//update by rollNo
export const update = async (req, res) => {
    try {
        const rollNo = req.params.rollNo;
        const studentExist = await Student.findOne({ RollNo: rollNo });
        if (!studentExist) {
            return res.status(404).json({ message: "Student not found." });
        }
        const updateStudent = await Student.findOneAndUpdate({ RollNo: rollNo }, req.body, { new: true }); // Update by RollNo
        res.status(200).json(updateStudent);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

//delete by rollNo
export const deleteStudent = async (req, res) => {
    try {
        const rollNo = req.params.rollNo;
        const studentExist = await Student.findOne({ RollNo: rollNo });
        if (!studentExist) {
            return res.status(404).json({ message: "Student not found." });
        }
        await Student.findOneAndDelete({ RollNo: rollNo });
        res.status(200).json({ message: "Student deleted successfully." });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};
