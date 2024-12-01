import {PageView} from "@/components/PageView";
import Card from "@/components/card/Card";
import CardHeader from "@/components/card/CardHeader";
import {ThemedText} from "@/components/ThemedText";
import Button from "@/components/Button";
import React from "react";
import {router} from "expo-router";
import {useAmountOnAccount} from "@/contexts/amountOnAccount";

const formatAmount = (amount: string) => {
	return Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(Number(amount))
}

export default function HomeTab() {
	const {amount, isLoading} = useAmountOnAccount()

	const navigateToUpdateAmountModal = () => {
		router.navigate('/update-account-amount');
	}

	return (
		<PageView>
			<ThemedText type="title">Bienvenue Rémy</ThemedText>
			<Card>
				<CardHeader>Montant sur compte</CardHeader>
				<ThemedText type="title">
					{isLoading && "Chargement..."}
					{!isLoading && formatAmount(amount)}
				</ThemedText>
				{!isLoading && (
					<Button onPress={navigateToUpdateAmountModal} >
						<ThemedText type="button">Mettre à jour</ThemedText>
					</Button>
				)}
			</Card>
		</PageView>
	)
}


