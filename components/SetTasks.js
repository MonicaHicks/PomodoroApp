import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import theme from "../assets/theme";
import Footer from "./Footer";
import Header from "./Header";

const TaskTag = ({ task, onDelete }) => (
  <View style={styles.tag}>
    <Text style={styles.tagText}>{task}</Text>
    <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
      <Text style={styles.tagText}>✕</Text>
    </TouchableOpacity>
  </View>
);

export default function SetTasks() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const addTask = () => {
    if (currentTask.trim()) {
      setTasks([...tasks, currentTask.trim()]);
      setCurrentTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Add Tasks for Your Work Period</Text>

        {/* Task Input Field */}
        <View style={styles.taskInputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter a task"
            placeholderTextColor={theme.colors.textSecondary}
            value={currentTask}
            onChangeText={setCurrentTask}
          />
          <TouchableOpacity style={styles.addButton} onPress={addTask}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>

        {/* Task Tags */}
        <View style={styles.tagsContainer}>
          {tasks.map((task, index) => (
            <TaskTag
              key={index}
              task={task}
              onDelete={() => deleteTask(index)}
            />
          ))}
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: theme.colors.text,
    marginVertical: 20,
  },
  taskInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    color: theme.colors.text,
  },
  addButton: {
    backgroundColor: theme.colors.buttonPrimary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonText: {
    color: theme.colors.buttonText,
    fontWeight: "bold",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.buttonPrimary,
    borderRadius: "7%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
  },
  tagText: {
    color: theme.colors.text,
    fontSize: 16,
  },
  deleteButton: {
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
