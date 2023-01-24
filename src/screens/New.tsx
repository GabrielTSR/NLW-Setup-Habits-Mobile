import { useState } from 'react'
import {
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { BackButton } from '../components/BackButton'
import { Checkbox } from '../components/Checkbox'
import colors from 'tailwindcss/colors'

const availableWeekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

export function New() {
    const [weekDays, setWeekDays] = useState<number[]>([])
    function handleToggleWeekDay(weekDayIndex: number) {
        if (weekDays.includes(weekDayIndex)) {
            setWeekDays((prevState) =>
                prevState.filter((weekDay) => weekDay !== weekDayIndex)
            )
        } else {
            setWeekDays((prevState) => [...prevState, weekDayIndex])
        }
    }
    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10 }}
            >
                <BackButton />
                <Text className="mt-6 text-white font-extrabold text-3xl">
                    Create habit
                </Text>
                <Text className="mt-6 text-white font-semibold text-base">
                    What is your commitment?
                </Text>
                <TextInput
                    className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 border-green-600"
                    placeholder="Exercise, sleep well, etc..."
                    placeholderTextColor={colors.zinc[400]}
                />
                <Text className="mt-4 mb-3 text-white font-semibold text-base">
                    What is the recurrence?
                </Text>
                {availableWeekDays.map((weekDay, index) => (
                    <Checkbox
                        key={weekDay}
                        title={weekDay}
                        checked={weekDays.includes(index)}
                        onPress={() => handleToggleWeekDay(index)}
                    />
                ))}
                <TouchableOpacity
                    className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6"
                    activeOpacity={0.7}
                >
                    <Feather name="check" size={20} color={colors.white} />
                    <Text className="font-semibold text-base text-white ml-2"></Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
