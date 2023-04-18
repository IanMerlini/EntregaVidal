package main

import (
	"fmt"
	"net/http"
)

func main() {
	// Define a função para a rota "/"
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "OttoTrab/login.html")
	})

	// Define a função para a rota "/home"
	http.HandleFunc("/home", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "OttoTrab/home_adm.html")

	})

	//http.HandleFunc("/home", func(w http.ResponseWriter, r *http.Request) {
	//http.ServeFile(w, r, "OttoTrab/home_adm.css")

	//})

	//http.HandleFunc("/home", func(w http.ResponseWriter, r *http.Request) {
	//http.ServeFile(w, r, "OttoTrab/home_adm.js")

	//})

	//http.HandleFunc("/home", func(w http.ResponseWriter, r *http.Request) {
	//http.ServeFile(w, r, "OttoTrab/login.js")

	//})

	//http.HandleFunc("/home", func(w http.ResponseWriter, r *http.Request) {
	//http.ServeFile(w, r, "OttoTrab/login.css")

	//})

	// Especifica o caminho da pasta de arquivos
	fs := http.FileServer(http.Dir("OttoTrab"))
	http.Handle("/OttoTrab/", http.StripPrefix("/OttoTrab/", fs))

	// Inicia o servidor na porta 8080
	fmt.Println("Servidor rodando na porta 8080...")
	http.ListenAndServe(":8080", nil)
}

// http://localhost:8080/login
// http://localhost:8080/home
