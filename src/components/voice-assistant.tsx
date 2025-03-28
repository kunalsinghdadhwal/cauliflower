"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, MicOff, Volume2, VolumeX, X, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface VoiceAssistantProps {
  userType: "student" | "faculty" | null
}

// Natural language processing helper
const processCommand = (command: string) => {
  command = command.toLowerCase()

  // Timetable related commands
  if (
    command.includes("timetable") ||
    command.includes("schedule") ||
    command.includes("class") ||
    command.includes("classes") ||
    command.includes("lectures") ||
    (command.includes("when") && (command.includes("class") || command.includes("lecture")))
  ) {
    return {
      type: "timetable",
      day: command.includes("today")
        ? "today"
        : command.includes("tomorrow")
          ? "tomorrow"
          : command.includes("monday")
            ? "monday"
            : command.includes("tuesday")
              ? "tuesday"
              : command.includes("wednesday")
                ? "wednesday"
                : command.includes("thursday")
                  ? "thursday"
                  : command.includes("friday")
                    ? "friday"
                    : command.includes("weekend") || command.includes("saturday") || command.includes("sunday")
                      ? "weekend"
                      : "all",
    }
  }

  // Events related commands
  if (
    command.includes("event") ||
    command.includes("events") ||
    command.includes("happening") ||
    command.includes("activities") ||
    command.includes("what's on") ||
    command.includes("whats on")
  ) {
    return {
      type: "events",
      filter: command.includes("today")
        ? "today"
        : command.includes("tomorrow")
          ? "tomorrow"
          : command.includes("this week")
            ? "this week"
            : command.includes("next week")
              ? "next week"
              : command.includes("this month")
                ? "this month"
                : "all",
    }
  }

  // Specific subject or course queries
  if (command.includes("math") || command.includes("mathematics")) {
    return { type: "subject", subject: "mathematics" }
  }
  if (
    command.includes("science") ||
    command.includes("physics") ||
    command.includes("chemistry") ||
    command.includes("biology")
  ) {
    return {
      type: "subject",
      subject: command.includes("physics")
        ? "physics"
        : command.includes("chemistry")
          ? "chemistry"
          : command.includes("biology")
            ? "biology"
            : "science",
    }
  }
  if (command.includes("english") || command.includes("literature")) {
    return { type: "subject", subject: "english" }
  }
  if (command.includes("history")) {
    return { type: "subject", subject: "history" }
  }
  if (command.includes("computer") || command.includes("programming") || command.includes("coding")) {
    return { type: "subject", subject: "computer science" }
  }

  // Help or general queries
  if (command.includes("help") || command.includes("what can you do") || command.includes("commands")) {
    return { type: "help" }
  }

  // Fallback
  return { type: "unknown", original: command }
}

// Mock data for responses
const getTimetableResponse = (day: string, userType: "student" | "faculty" | null) => {
  const isStudent = userType === "student"

  if (day === "weekend") {
    return "You don't have any classes scheduled for the weekend."
  }

  const responses: Record<string, string> = {
    today: isStudent
      ? "Today you have Mathematics at 9 AM, Computer Science at 11 AM, and English Literature at 2 PM."
      : "Today you're teaching Mathematics at 9 AM, Computer Science at 11 AM, and have office hours from 2 PM to 4 PM.",
    tomorrow: isStudent
      ? "Tomorrow you have Physics at 10 AM, History at 1 PM, and a study group at 3 PM."
      : "Tomorrow you're teaching Physics at 10 AM, have a department meeting at 12 PM, and office hours from 2 PM to 4 PM.",
    monday: isStudent
      ? "On Monday you have Mathematics at 9 AM, Computer Science at 11 AM, and English Literature at 2 PM."
      : "On Monday you're teaching Mathematics at 9 AM, Computer Science at 11 AM, and have office hours from 2 PM to 4 PM.",
    tuesday: isStudent
      ? "On Tuesday you have Physics at 10 AM, History at 1 PM, and a study group at 3 PM."
      : "On Tuesday you're teaching Physics at 10 AM, have a department meeting at 12 PM, and office hours from 2 PM to 4 PM.",
    wednesday: isStudent
      ? "On Wednesday you have Biology at 9 AM, Art at 11 AM, and Physical Education at 2 PM."
      : "On Wednesday you're teaching Biology at 9 AM, have a faculty meeting at 12 PM, and research time from 2 PM to 5 PM.",
    thursday: isStudent
      ? "On Thursday you have Chemistry at 10 AM, Music at 1 PM, and a club meeting at 3 PM."
      : "On Thursday you're teaching Chemistry at 10 AM, have student consultations from 1 PM to 3 PM, and a department meeting at 4 PM.",
    friday: isStudent
      ? "On Friday you have Mathematics at 9 AM, English Literature at 11 AM, and early dismissal at 1 PM."
      : "On Friday you're teaching Mathematics at 9 AM, English Literature at 11 AM, and have grading time from 1 PM to 3 PM.",
    all: isStudent
      ? "Your weekly schedule includes Mathematics on Monday, Wednesday, and Friday at 9 AM; Science classes on Tuesday and Thursday; and various electives in the afternoons."
      : "Your teaching schedule includes Mathematics on Monday, Wednesday, and Friday mornings; Science classes on Tuesday and Thursday; and office hours in the afternoons.",
  }

  return responses[day] || responses.all
}

const getEventsResponse = (filter: string, userType: "student" | "faculty" | null) => {
  const isStudent = userType === "student"

  const responses: Record<string, string> = {
    today: isStudent
      ? "Today there's a Chess Club meeting at 4 PM in the Student Center."
      : "Today there's a faculty development workshop at 4 PM in the Conference Room.",
    tomorrow: isStudent
      ? "Tomorrow there's a Career Fair from 10 AM to 3 PM in the Main Hall and a Basketball game at 6 PM."
      : "Tomorrow there's a department heads meeting at 9 AM and a guest lecture at 2 PM that you're invited to attend.",
    "this week": isStudent
      ? "This week's events include a Career Fair on Tuesday, Student Council elections on Wednesday, and a Basketball game on Friday."
      : "This week's events include a faculty development workshop today, department heads meeting tomorrow, and the quarterly review on Thursday.",
    "next week": isStudent
      ? "Next week's events include Spring Festival preparations starting Monday, Science Fair on Wednesday, and Alumni Day on Friday."
      : "Next week's events include curriculum planning sessions on Monday and Tuesday, and the annual faculty retreat on Friday.",
    "this month": isStudent
      ? "This month's major events include the Spring Festival, Science Fair, Alumni Day, and Final Exam preparations in the last week."
      : "This month's major events include curriculum planning sessions, the annual faculty retreat, and end-of-term grading workshops.",
    all: isStudent
      ? "Upcoming events include the Chess Club meeting today, Career Fair tomorrow, Student Council elections on Wednesday, and various activities throughout the month."
      : "Upcoming events include a faculty development workshop today, department heads meeting tomorrow, quarterly review on Thursday, and various administrative activities throughout the month.",
  }

  return responses[filter] || responses.all
}

const getSubjectResponse = (subject: string, userType: "student" | "faculty" | null) => {
  const isStudent = userType === "student"

  const responses: Record<string, string> = {
    mathematics: isStudent
      ? "Your Mathematics classes are on Monday, Wednesday, and Friday at 9 AM in Room 101. Your next assignment is due this Friday."
      : "You teach Mathematics on Monday, Wednesday, and Friday at 9 AM in Room 101. You have 28 students enrolled.",
    physics: isStudent
      ? "Your Physics class is on Tuesday at 10 AM in Room 203. There's a lab session on Thursday at the same time."
      : "You teach Physics on Tuesday at 10 AM in Room 203. The lab session is on Thursday at the same time.",
    chemistry: isStudent
      ? "Your Chemistry class is on Thursday at 10 AM in Room 205. Don't forget to bring your lab coat for the experiment."
      : "You teach Chemistry on Thursday at 10 AM in Room 205. The lab supplies for this week's experiment have been delivered.",
    biology: isStudent
      ? "Your Biology class is on Wednesday at 9 AM in Room 207. The field trip to the botanical garden is scheduled for next week."
      : "You teach Biology on Wednesday at 9 AM in Room 207. The field trip to the botanical garden is scheduled for next week.",
    science: isStudent
      ? "Your Science classes include Physics on Tuesday, Chemistry on Thursday, and Biology on Wednesday, all in the Science Building."
      : "You teach various Science classes: Physics on Tuesday, Chemistry on Thursday, and Biology on Wednesday.",
    english: isStudent
      ? "Your English Literature class is on Monday and Friday at 2 PM in Room 302. Your essay on Shakespeare is due next Monday."
      : "You teach English Literature on Monday and Friday at 2 PM in Room 302. You have 24 essays to grade by next week.",
    history: isStudent
      ? "Your History class is on Tuesday at 1 PM in Room 304. The museum visit is scheduled for next month."
      : "You teach History on Tuesday at 1 PM in Room 304. The department approved your museum visit proposal for next month.",
    "computer science": isStudent
      ? "Your Computer Science class is on Monday at 11 AM in the Computer Lab. Your programming project is due in two weeks."
      : "You teach Computer Science on Monday at 11 AM in the Computer Lab. The new programming software has been installed on all machines.",
  }

  return responses[subject] || `I don't have specific information about ${subject} classes at the moment.`
}

const getHelpResponse = () => {
  return (
    "I can help you with various tasks. Try asking me about:\n\n" +
    "• Your timetable or schedule (today, tomorrow, or specific days)\n" +
    "• Upcoming events (today, this week, this month)\n" +
    "• Information about specific subjects or courses\n" +
    "• Just speak naturally and I'll understand your request!"
  )
}

export default function VoiceAssistant({ userType }: VoiceAssistantProps) {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [response, setResponse] = useState("")
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [showTranscript, setShowTranscript] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [conversationHistory, setConversationHistory] = useState<Array<{ type: "user" | "assistant"; text: string }>>([
    { type: "assistant", text: `Hello! I'm your campus assistant. How can I help you today?` },
  ])
  const [textInput, setTextInput] = useState("")

  const recognitionRef = useRef<SpeechRecognition | null>(null)
  const synthRef = useRef<SpeechSynthesis | null>(null)

  // Initialize speech recognition and synthesis
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Speech Recognition setup
      let SpeechRecognition: any = null
      if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
        SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition
        recognitionRef.current = new SpeechRecognition()
        recognitionRef.current.continuous = true
        recognitionRef.current.interimResults = true

        recognitionRef.current.onresult = (event) => {
          const transcript = Array.from(event.results)
            .map((result) => result[0])
            .map((result) => result.transcript)
            .join("")

          setTranscript(transcript)

          // Process final results
          const isFinal = event.results[0].isFinal
          if (isFinal && transcript.trim()) {
            handleCommand(transcript)
          }
        }

        recognitionRef.current.onerror = (event) => {
          console.error("Speech recognition error", event.error)

          // Handle specific error types
          if (event.error === "network") {
            setIsListening(false)
            setIsProcessing(false)
            addToConversation(
              "assistant",
              "I'm having trouble connecting to the speech recognition service. Please check your internet connection and try again, or type your question instead.",
            )
            setResponse("Network error: Please check your connection and try again.")
          } else if (event.error === "not-allowed" || event.error === "permission-denied") {
            setIsListening(false)
            setIsProcessing(false)
            addToConversation(
              "assistant",
              "I need permission to access your microphone. Please allow microphone access and try again.",
            )
            setResponse("Microphone access denied. Please check your browser settings.")
          } else if (event.error === "no-speech") {
            // Don't show an error for no-speech, just stop listening
            setIsListening(false)
            setIsProcessing(false)
          } else {
            // Generic error handling
            setIsListening(false)
            setIsProcessing(false)
            addToConversation(
              "assistant",
              "I encountered an issue with speech recognition. You can try again or type your question instead.",
            )
            setResponse(`Speech recognition error: ${event.error}`)
          }

          // Attempt to restart recognition after network errors with a delay
          if (event.error === "network") {
            setTimeout(() => {
              if (recognitionRef.current) {
                try {
                  recognitionRef.current.abort() // Make sure any existing session is terminated
                  setTimeout(() => {
                    if (isListening) {
                      try {
                        recognitionRef.current?.start()
                      } catch (e) {
                        console.error("Failed to restart recognition after network error", e)
                        setIsListening(false)
                      }
                    }
                  }, 1000)
                } catch (e) {
                  console.error("Error aborting recognition", e)
                }
              }
            }, 3000)
          }
        }
      }

      // Speech Synthesis setup
      if ("speechSynthesis" in window) {
        synthRef.current = window.speechSynthesis
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort()
      }
      if (synthRef.current) {
        synthRef.current.cancel()
      }
    }
  }, [])

  const toggleListening = () => {
    if (isListening) {
      stopListening()
    } else {
      startListening()
    }
  }

  const startListening = () => {
    setTranscript("")
    setShowTranscript(true)

    if (recognitionRef.current) {
      try {
        // Reset any previous errors
        setResponse("")

        // Ensure any previous session is aborted
        try {
          recognitionRef.current.abort()
        } catch (e) {
          console.error("Error aborting previous recognition session", e)
        }

        // Start with a slight delay to ensure clean state
        setTimeout(() => {
          try {
            recognitionRef.current?.start()
            setIsListening(true)
          } catch (error) {
            console.error("Error starting speech recognition:", error)
            addToConversation(
              "assistant",
              "I couldn't start the speech recognition. You can type your question instead.",
            )
            setIsListening(false)
          }
        }, 100)
      } catch (error) {
        console.error("Error in speech recognition setup:", error)
        addToConversation("assistant", "Speech recognition failed to initialize. You can type your question instead.")
        setIsListening(false)
      }
    } else {
      setResponse("Speech recognition is not supported in your browser. Please type your question instead.")
      addToConversation(
        "assistant",
        "Speech recognition is not supported in your browser. Please type your question instead.",
      )
    }
  }

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
      setIsListening(false)
    }
  }

  const handleCommand = (command: string) => {
    stopListening()
    setIsProcessing(true)

    // Add user command to conversation
    addToConversation("user", command)

    // Process the command with a small delay to simulate thinking
    setTimeout(() => {
      const result = processCommand(command)
      let responseText = ""

      switch (result.type) {
        case "timetable":
          responseText = getTimetableResponse(result.day, userType)
          break
        case "events":
          responseText = getEventsResponse(result.filter, userType)
          break
        case "subject":
          responseText = getSubjectResponse(result.subject, userType)
          break
        case "help":
          responseText = getHelpResponse()
          break
        case "unknown":
          // Try to extract meaning from unknown commands
          if (command.includes("when") || command.includes("time")) {
            responseText = "I can tell you about your schedule. Try asking about your timetable for today or this week."
          } else if (command.includes("where")) {
            responseText = "I can help you find locations for your classes. Try asking about a specific subject."
          } else {
            responseText =
              "I'm not sure I understood that. Try asking about your timetable, upcoming events, or a specific subject."
          }
          break
      }

      setResponse(responseText)
      addToConversation("assistant", responseText)
      speakResponse(responseText)
      setIsProcessing(false)
    }, 500)
  }

  const speakResponse = (text: string) => {
    if (synthRef.current) {
      // Cancel any ongoing speech
      synthRef.current.cancel()

      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 1.0
      utterance.pitch = 1.0

      utterance.onstart = () => setIsSpeaking(true)
      utterance.onend = () => setIsSpeaking(false)
      utterance.onerror = () => setIsSpeaking(false)

      synthRef.current.speak(utterance)
    }
  }

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel()
      setIsSpeaking(false)
    }
  }

  const addToConversation = (type: "user" | "assistant", text: string) => {
    setConversationHistory((prev) => [...prev, { type, text }])
  }

  // Auto-scroll conversation to bottom
  const conversationEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (conversationEndRef.current) {
      conversationEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [conversationHistory])

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (textInput.trim()) {
      handleCommand(textInput)
      setTextInput("")
    }
  }

  // Add network status monitoring for speech recognition recovery
  useEffect(() => {
    let reinitialized = false

    const reinitializeSpeechRecognition = () => {
      if (typeof window !== "undefined" && !reinitialized) {
        reinitialized = true

        if (recognitionRef.current) {
          try {
            recognitionRef.current.abort()
          } catch (e) {
            console.error("Error aborting recognition during reinitialize", e)
          }
        }

        // Reinitialize speech recognition
        let SpeechRecognition: any = null
        if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
          SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition
          recognitionRef.current = new SpeechRecognition()
          recognitionRef.current.continuous = true
          recognitionRef.current.interimResults = true

          // Reattach event handlers
          recognitionRef.current.onresult = (event) => {
            const transcript = Array.from(event.results)
              .map((result) => result[0])
              .map((result) => result.transcript)
              .join("")

            setTranscript(transcript)

            // Process final results
            const isFinal = event.results[0].isFinal
            if (isFinal && transcript.trim()) {
              handleCommand(transcript)
            }
          }

          // Error handler is reattached with the same implementation
          recognitionRef.current.onerror = (event) => {
            // Same error handling as above
            console.error("Speech recognition error", event.error)

            // Handle specific error types
            if (event.error === "network") {
              setIsListening(false)
              setIsProcessing(false)
              addToConversation(
                "assistant",
                "I'm having trouble connecting to the speech recognition service. Please check your internet connection and try again, or type your question instead.",
              )
              setResponse("Network error: Please check your connection and try again.")
            } else if (event.error === "not-allowed" || event.error === "permission-denied") {
              setIsListening(false)
              setIsProcessing(false)
              addToConversation(
                "assistant",
                "I need permission to access your microphone. Please allow microphone access and try again.",
              )
              setResponse("Microphone access denied. Please check your browser settings.")
            } else if (event.error === "no-speech") {
              // Don't show an error for no-speech, just stop listening
              setIsListening(false)
              setIsProcessing(false)
            } else {
              // Generic error handling
              setIsListening(false)
              setIsProcessing(false)
              addToConversation(
                "assistant",
                "I encountered an issue with speech recognition. You can try again or type your question instead.",
              )
              setResponse(`Speech recognition error: ${event.error}`)
            }
          }
        }
      }
    }

    // Set up a listener for online/offline status
    const handleOnline = () => {
      console.log("Browser is online, reinitializing speech recognition")
      reinitializeSpeechRecognition()
    }

    if (typeof window !== "undefined") {
      window.addEventListener("online", handleOnline)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("online", handleOnline)
      }
    }
  }, [])

  return (
    <Card className="h-full shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Volume2 className="h-5 w-5 text-primary" />
            <span>Voice Assistant</span>
          </div>
          <div className="flex items-center gap-2">
            {isSpeaking && (
              <Button variant="ghost" size="icon" onClick={stopSpeaking} className="h-8 w-8">
                <VolumeX className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardTitle>
        <CardDescription>Ask about your timetable, events, or subjects</CardDescription>
      </CardHeader>

      <CardContent className="h-[400px] flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2">
          {conversationHistory.map((item, index) => (
            <div key={index} className={cn("flex", item.type === "user" ? "justify-end" : "justify-start")}>
              <div
                className={cn(
                  "max-w-[80%] rounded-lg px-4 py-2",
                  item.type === "user" ? "bg-primary text-primary-foreground" : "bg-muted",
                )}
              >
                {item.text}
              </div>
            </div>
          ))}
          <div ref={conversationEndRef} />
        </div>

        {showTranscript && transcript && (
          <div className="relative mb-4">
            <div className="bg-muted p-3 rounded-lg text-sm">
              <p className="font-medium mb-1">I heard:</p>
              <p>{transcript}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1 right-1 h-6 w-6"
              onClick={() => setShowTranscript(false)}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        )}

        {/* Text input fallback */}
        <form onSubmit={handleTextSubmit} className="mt-auto">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your question here..."
              className="flex-1 p-2 text-sm border rounded-md"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              disabled={isProcessing}
            />
            <Button type="submit" size="sm" disabled={isProcessing || !textInput.trim()}>
              Send
            </Button>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex justify-center pt-2">
        <Button
          variant={isListening ? "destructive" : "default"}
          className={cn(
            "rounded-full h-16 w-16 flex items-center justify-center",
            isProcessing && "opacity-50 cursor-not-allowed",
          )}
          onClick={toggleListening}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : isListening ? (
            <MicOff className="h-6 w-6" />
          ) : (
            <Mic className="h-6 w-6" />
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

