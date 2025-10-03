import React, { useState } from "react";

import { Text, View, Alert } from "react-native";
import { MaterialIcons, Octicons } from "@expo/vector-icons";

import { style } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(true);
	const [loading, setLoading] = useState(false);

	function getLogin() {
		try {
			setLoading(true);

			if (!email || !password) {
				setLoading(false);
				return Alert.alert(
					"Atenção!",
					"Informe os campos obrigatórios."
				);
			}

			setTimeout(() => {
				setLoading(false);
				Alert.alert("Logado com sucesso!", "Você efetuou o login.");
			}, 3000);
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<View style={style.container}>
			<View style={style.boxTop}>
				<Text style={style.text}>Bem vindo de volta!</Text>
			</View>
			<View style={style.boxMid}>
				<Input
					value={email}
					onChangeText={setEmail}
					title="Endereço de e-mail"
					IconRight={MaterialIcons}
					iconRightName="email"
				/>
				<Input
					value={password}
					onChangeText={setPassword}
					title="Senha"
					IconRight={Octicons}
					iconRightName={showPassword ? "eye-closed" : "eye"}
					onIconRightPress={() => setShowPassword(!showPassword)}
					secureTextEntry={showPassword}
				/>
			</View>
			<View style={style.boxBottom}>
				<Button
					text="Entrar"
					loading={loading}
					onPress={() => getLogin()}
				/>
			</View>
			<Text>
				Não possui uma conta?{" "}
				<Text style={{ color: "#e07cffff" }}>Crie uma agora!</Text>
			</Text>
		</View>
	);
}
